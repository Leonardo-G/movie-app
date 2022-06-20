import React, { FC } from 'react'
import { StarContext } from './StarContext';
import { useState } from 'react';

export interface Props {
    children: JSX.Element | JSX.Element[]
}

export const StarState:FC<Props> = ({ children }) => {
    
    const [starValue, setStarValue] = useState<number>(0)

    const handleChangeValue = ( value: number ) => {
        
        if( starValue === value ){
            setStarValue(0)
            return; 
        }

        setStarValue(value)
    }

    return (
        <StarContext.Provider value={{
            starValue,
            handleChangeValue
        }}>
            { children }
        </StarContext.Provider>
    )
}
