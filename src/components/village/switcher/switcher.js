import React from "react";
import { 
    SwContainer,
    SwPrev,
    SwNext,
    SwNoDataImg
} from './style'
import { useSelector } from 'react-redux'

const Switch = ({page,setPage}) => {
    const noData = useSelector( state => state.list.noData )
    return  !noData ? <SwContainer>
                        <SwPrev onClick={()=> page !== 0 ? setPage(page - 1 ) : null} disabled={page === 0}/>
                        <SwNext onClick={()=> setPage(page + 1 )} />
                    </SwContainer> : 
                    <SwContainer>
                        <SwNoDataImg />
                    </SwContainer>
}

export default Switch