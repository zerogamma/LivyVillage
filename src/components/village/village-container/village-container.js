import React from "react";
import { 
    ELContainer,
} from './style'

import Village from '../village-list'

const List = ({data, friendSearch, searchProfession, currentFilter}) => {
    return <ELContainer>
                <Village data={data} friendSearch={friendSearch} searchProfession={searchProfession} currentFilter={currentFilter} />                    
            </ELContainer>
}

export default List