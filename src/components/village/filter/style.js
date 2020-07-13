import styled from 'styled-components'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


export const FilContainer = styled.div`
    height: 100%;
    background-color: cadetblue;
    width: 100%;
`

export const FilContent = styled.div`
    ${props => !props.expanded ? `
    transform: rotate(270deg);
    position: relative;
    top: 50%;
    `:`
    width: 250px;
    padding: 20px;
    border-bottom: 1px solid;
    `}
`
export const FilTitle = styled.div`
`

export const FilFilters = styled.div`
    padding: 20px;
    display: grid;
    gap: 15px;
`

export const FilFilter = styled(TextField)`
`

export const FiImgContainer = styled.div`
    top: 15px;
    position: relative;
`

export const FiExpand = styled(ArrowForwardIosIcon)`
    position: fixed;
    left: 10px;
`

export const FiCollapse = styled(ArrowBackIosIcon)`
    position: fixed;
    left: 225px;
`