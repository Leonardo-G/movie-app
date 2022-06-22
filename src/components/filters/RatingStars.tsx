import { FC, useContext } from 'react'
import { Star } from '../UI/Star';
import { FilterContext } from '../../context/filterContext';

export const RatingStars: FC = () => {

    const { starValue, handleChangeValue } = useContext(FilterContext);

    return (
        <div style={{   
            "display": "flex", 
            "alignItems": "center"
        }}>
            <p style={{
                "fontSize": "1.6rem",
                "paddingRight": "1rem",
                "fontWeight": 700
            }}>Search by Rating</p>
            {
                [1, 2, 3, 4, 5].map( (star) => (
                    <Star key={ star } star={ star } starValue={ starValue } handleChangeValue={ handleChangeValue }/>
                ))
            }            
        </div>
    )
}
