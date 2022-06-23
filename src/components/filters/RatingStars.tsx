import { FC, useContext } from 'react'
import { Star } from '../UI/Star';
import { FilterContext } from '../../context/filterContext';

import "../../styles/components/filters/RatingStar.css";

export const RatingStars: FC = () => {

    const { starValue, handleChangeValue } = useContext(FilterContext);

    return (
        <div className="rating">
            <p>Search by Rating</p>
            {
                [1, 2, 3, 4, 5].map( (star) => (
                    <Star key={ star } star={ star } starValue={ starValue } handleChangeValue={ handleChangeValue }/>
                ))
            }            
        </div>
    )
}
