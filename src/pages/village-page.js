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
    const [searchValue, setSearchValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [pageValue, setPageValue] = useState(0)

    const search = (value) => {
        setSearchValue(value);
    }

    useEffect( () => { 
        async function fetchData() {
            async function fetch(){
                dispatch(fetchVillage({'filter':searchValue, 'page':pageValue}));
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
    },[dispatch, searchValue, pageValue])

   

    return <MainContainer>
                <Filter />
                <LoadingBar isLoading={isLoading}/>
                <LayoutContainer>
                    {/* <SearchBar search={search} placeholder='User Id (MultiSearch e.g: 1,2,3)' /> */}
                    <Switcher page={pageValue} setPage={setPageValue}/>
                    <List search={search} />
                </LayoutContainer>
            </MainContainer>
}

export default Village;
  