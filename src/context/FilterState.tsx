import React, { FC } from 'react'
import { FilterContext } from './filterContext';
import { useState } from 'react';

export interface Props {
    children: JSX.Element | JSX.Element[]
}

export const FilterState:FC<Props> = ({ children }) => {
    
    const [starValue, setStarValue] = useState<number>(0);
    const [searchValue, setSearchValue] = useState<string>("");

    const handleChangeValue = ( value: number ) => {
        
        if( starValue === value ){
            setStarValue(0)
            return; 
        }

        setStarValue(value)
    }

    const handleSearch = ( value: string ) => {
        setSearchValue(value)
    }

    return (
        <FilterContext.Provider value={{
            starValue,
            handleChangeValue,
            searchValue,
            handleSearch
        }}>
            { children }
        </FilterContext.Provider>
    )
}
