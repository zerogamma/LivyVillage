import React from 'react'
import { ELContainer } from './style'

import Village from '../village-list'

const List = (props) => {
    return (
        <ELContainer>
            <Village {...props} />
        </ELContainer>
    )
}

export default List
