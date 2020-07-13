import styled from 'styled-components'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import NoDataImg from '../../../content/image/no_result.png'

export const SwContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const SwPrev = styled(SkipPreviousIcon)`
    width: 2em !important;
    height: 2em !important;
    ${props => props.disabled ? 'color:gray' : 'color:black' }
`

export const SwNext = styled(SkipNextIcon)`
    width: 2em !important;
    height: 2em !important;
`

export const SwNoDataImg = styled.div`
    background-image: url(${NoDataImg});
    background-repeat: no-repeat;
    height: 645px;
    width: 500px;
    background-size: contain;
    background-position-y: top;
`