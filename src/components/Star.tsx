import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';

interface Props {
    star: number;
    starValue: number;
    handleChangeValue: (star:number) => void;
}

export const Star: FC<Props> = ({star, starValue, handleChangeValue}) => {
    return (
        <div>
            <FontAwesomeIcon 
                icon={ starValue >= star ? faStarSolid : faStar } 
                onClick={ () => handleChangeValue(star)}  
            />
        </div>
    )
}
