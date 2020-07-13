import styled from 'styled-components'
import MaterialCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export const Card = styled(MaterialCard)`
    display: grid;
    border: 1px solid;
    width: fit-content;
    padding: 5px;
    margin: 15px;
    grid-template-columns: 40% 60%;
    gap: 1px;
    width: 400px;
    height: 450px;
 
`

export const CrdMedia = styled(CardMedia)`
    background-size: 100% 100% !important;
`

export const CrdData = styled(CardContent)`
`

export const CrdInfo = styled(Typography)`
    span{
        font-variant: all-small-caps;
    }
`
export const CrdDetails = styled.div``


export const CrdAccord = styled.div`
    margin: 0 15px;
`
export const CrdAccordSummary = styled.div`
    border-bottom: 1px solid;
    margin-bottom: 12px;
`
export const CrdAccordDetails = styled.div`
    ${props => props.expand ? 'display:block' : 'display:none'} 
`
export const CrdExpand = styled.div``
