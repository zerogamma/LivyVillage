import React , { useRef } from "react";
import {
    SchBox,
    SchButtomSearch,
    SchButtomClear,
    SchContainer
} from './style';


const SearchBar = (props) => {
    const inputValueRef = useRef(null);

    const action = () => (props.search(inputValueRef.current.value))
    const actionClear = () => {
        inputValueRef.current.value = '';
        props.search('')
    }
    const handleKeyPress = (target) => {
       if (target.charCode === 13)
            action();
    }

    return (
    <SchContainer>
        <SchBox  inputRef={inputValueRef} onKeyPress={handleKeyPress} placeholder={props.placeholder} />
        <SchButtomSearch onClick={ action } />
        <SchButtomClear onClick={ actionClear } />
    </SchContainer>
)}

export default SearchBar;

