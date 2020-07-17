import styled from 'styled-components'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

export const FilContainer = styled.div`
    transition: width 1s ease-out;
    height: 100%;
    background-color: lightgray;
    min-height: 1000px;
    ${(props) =>
        !props.expanded
            ? `
    width: 45px;
    `
            : `
    width: 250px;
    `}
`

export const FilContent = styled.div`
    ${(props) =>
        !props.expanded
            ? `
    transform: rotate(270deg);
    position: relative;
    top: 50%;
    `
            : `
    padding: 20px;
    border-bottom: 1px solid;
    `}
    
    @media (max-width: ${(props) => props.theme.screen.sm}) {
        ${(props) =>
            !props.expanded
                ? `
        top: 4%;
        `
                : `
        `}
    }
`
export const FilTitle = styled.div``

export const FilFilters = styled.div`
    padding: 20px;
    display: grid;
    gap: 15px;
`

export const FilFilter = styled(TextField)``

export const FiImgContainer = styled.div`
    top: 15px;
    position: relative;
    text-align: end;
    margin-right: 25px;
`

export const FiExpand = styled(ArrowForwardIosIcon)`
    cursor: pointer;
    position: fixed;
    left: 10px;
`

export const FiCollapse = styled(ArrowBackIosIcon)`
    cursor: pointer;
    position: fixed;
`

export const FiButtom = styled(Button)`
    cursor: pointer;

    &.MuiButton-root {
        text-transform: none;
        font-size: 1.2rem;
    }
`

export const FiNote = styled.div`
    margin: 5px 0;
    font-size: 12px;
    color: dimgrey;
`
