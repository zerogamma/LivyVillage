import React from "react";
import { 
    SwContainer,
    SwPrev,
    SwNext,
} from './style'

const Switch = ({page,setPage}) => {
    return <SwContainer>
                     <SwPrev onClick={()=> page !== 0 ? setPage(page - 1 ) : null} disabled={page === 0}/>
                     <SwNext onClick={()=> setPage(page + 1 )} />
            </SwContainer>
}

export default Switch