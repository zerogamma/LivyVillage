import React, { useState, useRef } from 'react'
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

const Filter = ({
    currentFilter,
    filter,
    searchProfession,
    filterRemoveProfession,
}) => {
    const inputAgeRef = useRef(null)
    const inputWeightRef = useRef(null)
    const inputHeightRef = useRef(null)
    const inputHairRef = useRef(null)
    const inputProfessionRef = useRef(null)

    const [expand, setExpand] = useState(false)

    const removeProfession = (target) => {
        filterRemoveProfession(target.currentTarget.innerText)
    }

    const filterAge = (target) => {
        if (target.charCode === 13)
            filter(
                Object.assign({}, currentFilter, {
                    age: Number(inputAgeRef.current.value),
                })
            )
    }

    const filterWeight = (target) => {
        if (target.charCode === 13)
            filter(
                Object.assign({}, currentFilter, {
                    weight: Number(inputWeightRef.current.value),
                })
            )
    }
    const filterHeight = (target) => {
        if (target.charCode === 13)
            filter(
                Object.assign({}, currentFilter, {
                    height: Number(inputHeightRef.current.value),
                })
            )
    }
    const filterHair = (target) => {
        if (target.charCode === 13)
            filter(
                Object.assign({}, currentFilter, {
                    hair: inputHairRef.current.value,
                })
            )
    }
    const filterProfession = (target) => {
        if (target.charCode === 13) {
            searchProfession(inputProfessionRef.current.value)
            inputProfessionRef.current.value = ''
        }
    }

    return (
        <FilContainer expanded={expand}>
            <FiImgContainer>
                {!expand ? (
                    <FiExpand onClick={() => setExpand(!expand)} />
                ) : (
                    <FiCollapse onClick={() => setExpand(!expand)} />
                )}
            </FiImgContainer>
            <FilContent expanded={expand}>
                <FilTitle>Filter</FilTitle>
            </FilContent>
            {expand && (
                <FilFilters>
                    <FilFilter
                        inputRef={inputAgeRef}
                        onKeyPress={filterAge}
                        label="Age:"
                    ></FilFilter>
                    <FilFilter
                        inputRef={inputWeightRef}
                        onKeyPress={filterWeight}
                        label="Weight:"
                    ></FilFilter>
                    <FilFilter
                        inputRef={inputHeightRef}
                        onKeyPress={filterHeight}
                        label="Height:"
                    ></FilFilter>
                    <FilFilter
                        inputRef={inputHairRef}
                        onKeyPress={filterHair}
                        label="Hair Color:"
                    ></FilFilter>
                    <FilFilter
                        inputRef={inputProfessionRef}
                        onKeyPress={filterProfession}
                        label="Profession:"
                        placeholder="Case sensitive"
                    ></FilFilter>
                    <FiNote>Note: Press 'enter' to search</FiNote>
                    {currentFilter.profession.map((prof, index) => (
                        <FiButtom
                            key={'fiBut' + index}
                            onClick={removeProfession}
                        >
                            {prof}
                        </FiButtom>
                    ))}
                </FilFilters>
            )}
        </FilContainer>
    )
}

export default Filter
