import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchVillage } from '../store/village-list'
import List from '../components/village/village-container'
import MainContainer from '../components/common/main-container'
import SearchBar from '../components/village/search-bar'
import LoadingBar from '../components/common/loading-bar'
import Switcher from '../components/village/switcher'
import Filter from '../components/village/filter'
import LayoutContainer from '../components/village/layout-container'
import { useSelector } from 'react-redux'

const Village = () => {
    const dispatch = useDispatch()
    const [filterValue, setfilterValue] = useState({
        age: '',
        weight: '',
        height: '',
        hair: '',
        profession: [],
    })
    const [pageValue, setPageValue] = useState(0)
    const [searchValue, setSearchValue] = useState('')

    const isLoading = useSelector((state) => state.list.loading)
    const noData = useSelector((state) => state.list.noData)
    const listStore = useSelector((state) => state.list.entities)

    const filter = (value) => {
        setfilterValue(value)
    }

    const searchProfession = (value) => {
        const filters = [...filterValue.profession]
        if (!filters.includes(value)) {
            filters.push(value)
            filter(Object.assign({}, filterValue, { profession: filters }))
        }
    }

    const filterRemoveProfession = (value) => {
        const filters = [...filterValue]
        filter(
            Object.assign({}, filterValue, {
                profession: filters.filter((pro) => pro !== value),
            })
        )
    }

    const search = (value) => {
        setSearchValue(value)
    }

    useEffect(() => {
        async function fetchData() {
            async function fetch() {
                dispatch(
                    fetchVillage({
                        name: searchValue,
                        filter: filterValue,
                        page: pageValue,
                    })
                )
            }
            try {
                await Promise.all([fetch()])
            } catch (err) {
                console.error(err)
            }
        }
        fetchData()
    }, [dispatch, searchValue, filterValue, pageValue])

    return (
        <MainContainer>
            <Filter
                currentFilter={filterValue}
                filter={filter}
                searchProfession={searchProfession}
                filterRemoveProfession={filterRemoveProfession}
            />
            <LoadingBar isLoading={isLoading} />
            <LayoutContainer>
                <SearchBar
                    search={search}
                    placeholder="Search By Name (Case sensitive)"
                />
                <Switcher
                    noData={noData}
                    page={pageValue}
                    setPage={setPageValue}
                />
                <List
                    data={listStore}
                    friendSearch={search}
                    searchProfession={searchProfession}
                />
            </LayoutContainer>
        </MainContainer>
    )
}

export default Village
