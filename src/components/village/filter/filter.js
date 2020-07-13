import React , { useState , useRef  } from "react";
import { 
    FilContainer,
    FilContent,
    FiExpand,
    FiCollapse,
    FiImgContainer,
    FilTitle,
    FilFilters,
    FilFilter,
    FiButtom,
    FiNote,
} from './style'

const Filter = ({currentFilter,filter}) => {
    const inputAgeRef = useRef(null);
    const inputWeightRef = useRef(null);
    const inputHeightRef = useRef(null);
    const inputHairRef = useRef(null);
    const inputProfessionRef = useRef(null);

    const [expand, setExpand] = useState(false)

    const action = (target) => {
        switch(true){
            case target.target === inputAgeRef.current:
                filter(Object.assign({},currentFilter,{'age':Number(inputAgeRef.current.value)}));
                break;
            case target.target === inputWeightRef.current:
                filter(Object.assign({},currentFilter,{'weight':Number(inputWeightRef.current.value)}));
                break;
            case target.target === inputHeightRef.current:
                filter(Object.assign({},currentFilter,{'height':Number(inputHeightRef.current.value)}));
                break;
            case target.target === inputHairRef.current:
                filter(Object.assign({},currentFilter,{'hair':inputHairRef.current.value}));
                break;
            case target.target === inputProfessionRef.current:
                const newProfession = [...currentFilter.profession];
                newProfession.push(inputProfessionRef.current.value);
                inputProfessionRef.current.value = '';
                filter(Object.assign({},currentFilter,{'profession':newProfession}));
                break;
            default:
                break;
        }
    }

    const removeProfession = (target) => {
        const oldProfession = [...currentFilter.profession];
        const newProfession = oldProfession.filter(r=> r.toUpperCase() !== target.currentTarget.innerText.toUpperCase())
        filter(Object.assign({},currentFilter,{'profession':newProfession}));
    }

    const handleKeyPress = (target) => {
       if (target.charCode === 13)
            action(target);
    }

    return <FilContainer expanded={expand}>
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
                            <FilFilter inputRef={inputProfessionRef} onKeyPress={handleKeyPress} label="Profession:" placeholder="Case sensitive"></FilFilter>
                            <FiNote>Note: Press 'enter' to search</FiNote>
                            { currentFilter.profession.map( (prof,index) => <FiButtom key={'fiBut'+index} onClick={removeProfession}>{ prof }</FiButtom> )}
                        </FilFilters>}
            </FilContainer>
}

export default Filter