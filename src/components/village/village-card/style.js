import styled from 'styled-components'
import MaterialCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export const Card = styled(MaterialCard)`
    display: grid;
    border: 1px solid;
    width: fit-content;
    padding: 5px;
    margin: 15px;
    grid-template-columns: 40% 60%;
    gap: 1px;
    width: 400px;
    height: 550px;

    @media (max-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: auto;
        grid-template-rows: 25% 75%;
        width: 250px;
        height: 650px;
    }
 
`

export const CrdMedia = styled(CardMedia)`
    background-size: 100% 100% !important;
`

export const CrdData = styled(CardContent)`
`

export const CrdInfo = styled(Typography)`

    @media (max-width: ${props => props.theme.screen.sm}) {
        font-size: 12px !important;    
    }

    span{
        font-variant: all-small-caps;
    }
`

export const CrdInfoFriend = styled(CrdInfo)`
`

export const CrdInfoFriendTitle = styled(CrdInfo)`
    margin: 10px 0 !important;
    border-bottom: 1px solid;
`

export const CrdExpandM = styled(ExpandMoreIcon)`
    margin-left: 90px;
    @media (max-width: ${props => props.theme.screen.sm}) {
        margin-left: 120px;   
    }
`
export const CrdExpandL = styled(ExpandLessIcon)`
    margin-left: 90px;
    @media (max-width: ${props => props.theme.screen.sm}) {
        margin-left: 120px;   
    }
`

export const CrdDetails = styled.div``


export const CrdAccord = styled.div`
    margin: 0 15px;
`
export const CrdAccordSummary = styled.div`
    cursor: pointer;
    border-bottom: 1px solid;
    margin-bottom: 12px;
    display: flex;
`
export const CrdAccordDetails = styled.div`
    ${props => props.expand ? 'display:block' : 'display:none'} 
`
export const CrdExpand = styled.div``
