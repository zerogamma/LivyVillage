import React, { useState } from 'react'
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
    const [expand, setExpand] = useState(false)

    const removeProfession = (target) => {
        filterRemoveProfession(target.currentTarget.innerText)
    }

    const filterHandler = (target) => {
        if (target.charCode === 13)
            filter(
                Object.assign({}, currentFilter, {
                    [target.currentTarget.dataset.type]: target.target.value,
                })
            )
    }

    const filterProfession = (target) => {
        if (target.charCode === 13) {
            searchProfession(target.target.value)
            target.target.value = ''
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
                        data-type="age"
                        onKeyPress={filterHandler}
                        label="Age:"
                    ></FilFilter>
                    <FilFilter
                        data-type="weight"
                        onKeyPress={filterHandler}
                        label="Weight:"
                    ></FilFilter>
                    <FilFilter
                        data-type="height"
                        onKeyPress={filterHandler}
                        label="Height:"
                    ></FilFilter>
                    <FilFilter
                        data-type="hair"
                        onKeyPress={filterHandler}
                        label="Hair Color:"
                    ></FilFilter>
                    <FilFilter
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
