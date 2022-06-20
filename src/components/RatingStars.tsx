import React, { FC, useContext } from 'react'
import { useState } from 'react';
import { Star } from './Star';
import { StarContext } from '../context/StarContext';

export const RatingStars: FC = () => {

    const { starValue, handleChangeValue } = useContext(StarContext);

    return (
        <div>
            {
                [1, 2, 3, 4, 5].map( (star) => (
                    <Star key={ star } star={ star } starValue={ starValue } handleChangeValue={ handleChangeValue }/>
                ))
            }            
        </div>
    )
}
