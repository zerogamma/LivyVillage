import React from "react";
import { 
    SwContainer,
    SwPrev,
    SwNext,
    SwNoDataImg
} from './style'

const Switch = ({page,setPage,noData}) => {
    
    return  !noData ? <SwContainer>
                        <SwPrev onClick={()=> page !== 0 ? setPage(page - 1 ) : null} disabled={page === 0}/>
                        <SwNext onClick={()=> setPage(page + 1 )} />
                    </SwContainer> : 
                    <SwContainer>
                        <SwNoDataImg />
                    </SwContainer>
}

export default Switch