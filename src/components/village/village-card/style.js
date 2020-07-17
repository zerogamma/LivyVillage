import styled from 'styled-components'
import MaterialCard from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

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

    @media (max-width: ${(props) => props.theme.screen.sm}) {
        grid-template-columns: auto;
        grid-template-rows: 25% 75%;
        width: 250px;
        height: 650px;
    }
`

export const CrdMedia = styled(CardMedia)`
    background-size: contain !important;
    background-position: top !important;
    margin-top: 20px;
`

export const CrdData = styled(CardContent)``

export const CrdInfo = styled(Typography)`
    @media (max-width: ${(props) => props.theme.screen.sm}) {
        font-size: 12px !important;
    }

    span {
        font-variant: all-small-caps;
    }
`

export const CrdInfoAction = styled(CrdInfo)`
    cursor: pointer;
    :hover {
        background-color: lightgrey;
        border-radius: 4px;
    }
`

export const CrdColorPalette = styled.div`
    background-color: ${(props) => props.color};
    width: 20px;
    height: 20px;
    margin-left: 10px;
    border-radius: 6px;
    align-self: center;

    @media (max-width: ${(props) => props.theme.screen.sm}) {
        width: 15px;
        height: 15px;
    }
`
export const CrdColorContent = styled.div`
    display: flex;
`

export const CrdInfoFriendTitle = styled(CrdInfo)`
    margin: 10px 0 !important;
    border-bottom: 1px solid;
`

export const CrdDetails = styled.div``

export const CrdAccord = styled.div`
    margin: 0 15px;
`
export const CrdAccordSummary = styled.div`
    border-bottom: 1px solid;
    margin-bottom: 12px;
    display: flex;
`
export const CrdAccordDetails = styled.div``
export const CrdExpand = styled.div``
