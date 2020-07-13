import React , { useState , useRef  } from "react";
import { 
    FilContainer,
    FilContent,
    FiExpand,
    FiCollapse,
    FiImgContainer,
    FilTitle,
    FilFilters,
    FilFilter
} from './style'

const Filter = ({currentFilter,filter}) => {
    const inputAgeRef = useRef(null);
    const inputWeightRef = useRef(null);
    const inputHeightRef = useRef(null);
    const inputHairRef = useRef(null);

    const [expand, setExpand] = useState(false)

    const action = (target) => {
        switch(true){
            case target.target === inputAgeRef.current:
                filter(Object.assign(currentFilter,{'age':inputAgeRef.current.value}));
                break;
            case target.target === inputWeightRef.current:
                filter(Object.assign(currentFilter,{'weight':inputWeightRef.current.value}));
                break;
            case target.target === inputHeightRef.current:
                filter(Object.assign(currentFilter,{'height':inputHeightRef.current.value}));
                break;
            case target.target === inputHairRef.current:
                filter(Object.assign(currentFilter,{'hair':inputHairRef.current.value}));
                break;
            default:
                break;
        }
    }

    const handleKeyPress = (target) => {
       if (target.charCode === 13)
            action(target);
    }

    return <FilContainer>
                    <FiImgContainer>
                        {!expand ? <FiExpand onClick={()=> setExpand(!expand)} />: <FiCollapse onClick={()=> setExpand(!expand)} />}
                    </FiImgContainer>
                    <FilContent expanded={expand}>
                        <FilTitle>Filter</FilTitle>
                    </FilContent>
                    {expand && <FilFilters>
                            <FilFilter inputRef={inputAgeRef} onKeyPress={handleKeyPress} label="Age:"></FilFilter>
                            <FilFilter inputRef={inputWeightRef} onKeyPress={handleKeyPress} label="Weight:"></FilFilter>
                            <FilFilter inputRef={inputHeightRef} onKeyPress={handleKeyPress} label="Height:"></FilFilter>
                            <FilFilter inputRef={inputHairRef} onKeyPress={handleKeyPress} label="Hair Color:"></FilFilter>
                        </FilFilters>}
            </FilContainer>
}

export default Filter