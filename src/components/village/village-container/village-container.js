import React from "react";
import { 
    ELContainer,
} from './style'

import Village from '../village-list'

const List = ({data}) => {
    return <ELContainer>
                <Village data={data} />                    
            </ELContainer>
}

export default List