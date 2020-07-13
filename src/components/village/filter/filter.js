import React , { useState } from "react";
import { 
    FilContainer,
    FilContent,
    FiExpand,
    FiCollapse,
    FiImgContainer
} from './style'

const Filter = () => {
    const [expand, setExpand] = useState(false)

    return <FilContainer>
                    <FiImgContainer>
                        {!expand ? <FiExpand onClick={()=> setExpand(!expand)} />: <FiCollapse onClick={()=> setExpand(!expand)} />}
                    </FiImgContainer>
                    <FilContent expanded={expand}>
                        Filter
                    </FilContent>
            </FilContainer>
}

export default Filter