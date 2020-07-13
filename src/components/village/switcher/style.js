import styled from 'styled-components'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

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