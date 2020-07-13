import React from "react";
import {
    VillList
} from './style'
import VillageCard from "../village-card";

const List = (props) => {       
    return props.data.map( (list, i)=> 
                    <VillList key={list.id} >                
                        <VillageCard data={list}/>
                    </VillList>

    )
}

export default List