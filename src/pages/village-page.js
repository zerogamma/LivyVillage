import React, { useState, useEffect } from "react"
import { useDispatch } from 'react-redux'
import { fetchVillage } from '../store/villageList'
import List from "../components/village/village-container"
import MainContainer from "../components/common/mainContainer"
import SearchBar from '../components/common/search-bar'
import LoadingBar from '../components/common/loading-bar'
import Switcher from '../components/village/switcher'
import Filter from '../components/village/filter'
import LayoutContainer from '../components/village/layoutContainer'

const Village = () => {
    const dispatch = useDispatch()
    const [filterValue, setfilterValue] = useState({'age':'', 'weight':'','height':'','hair':'','profession':[]})
    const [isLoading, setIsLoading] = useState(false)
    const [pageValue, setPageValue] = useState(0)
    const [searchValue, setSearchValue] = useState('')

    const filter = (value) => {
        setfilterValue(value)
    }

    const search = (value) => {
        setSearchValue(value);
    }

    useEffect( () => { 
        async function fetchData() {
            async function fetch(){
                dispatch(fetchVillage({'name':searchValue,'filter':filterValue, 'page':pageValue}));
            }
            try {
                await Promise.all([fetch()]);
              } catch (err) {
                console.error(err);
              } finally {
                setIsLoading(false);
              }
        }
        setIsLoading(true);
        fetchData();
    },[dispatch , searchValue , filterValue , pageValue])

   

    return <MainContainer>
                <Filter currentFilter={filterValue} filter={filter}/>
                <LoadingBar isLoading={isLoading}/>
                <LayoutContainer>
                    <SearchBar search={search} placeholder='Search By Name' />
                    <Switcher page={pageValue} setPage={setPageValue}/>
                    <List />
                </LayoutContainer>
            </MainContainer>
}

export default Village;
  