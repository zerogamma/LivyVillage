import React from "react";
import { useSelector } from 'react-redux'
import { 
    ELContainer,
} from './style'

import Village from '../village-list'

const List = () => {
    const listStore = useSelector( state => state.list.entities )

    return <ELContainer>
                <Village data={listStore} />                    
            </ELContainer>
}

export default List