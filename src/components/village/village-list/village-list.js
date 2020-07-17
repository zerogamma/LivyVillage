import React from 'react'
import { VillList } from './style'
import VillageCard from '../village-card'

const List = (props) => {
    return props.data.map((list, i) => (
        <VillList key={i}>
            <VillageCard
                data={list}
                searchFriend={props.searchFriend}
                searchProfession={props.searchProfession}
            />
        </VillList>
    ))
}

export default List
