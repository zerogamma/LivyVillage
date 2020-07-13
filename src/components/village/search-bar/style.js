import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import ClearAllIcon from '@material-ui/icons/ClearAll';

export const SchContainer = styled.div`
    text-align: left;
    margin-left: 35px;
    
    @media (max-width: ${props => props.theme.screen.sm}) {
        margin-left: 18px;
    }
`

export const SchBox = styled(TextField)`
    width: 250px;
    border-radius: 5px;
    text-align: center;

    @media (max-width: ${props => props.theme.screen.sm}) {
        width: 190px;
        & .MuiInputBase-input{
            font-size: 12px;
        }
    }
    
`

export const SchButtomSearch = styled(SearchIcon)`
    cursor: pointer;
    position: absolute;
    margin-left: 5px;
    margin-top: 5px;
`


export const SchButtomClear = styled(ClearAllIcon)`
    cursor: pointer;
    position: absolute;
    margin-left: 30px;
    font-size: 2rem !important;
`

