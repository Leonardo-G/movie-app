import { FC, useContext } from 'react'
import { Star } from './Star';
import { StarContext } from '../context/StarContext';

export const RatingStars: FC = () => {

    const { starValue, handleChangeValue } = useContext(StarContext);

    return (
        <div style={{   
            "display": "flex", 
            "alignItems": "center"
        }}>
            <p style={{
                "fontSize": "1.6rem",
                "paddingRight": "1rem",
                "fontWeight": 700
            }}>Search by Popularity</p>
            {
                [1, 2, 3, 4, 5].map( (star) => (
                    <Star key={ star } star={ star } starValue={ starValue } handleChangeValue={ handleChangeValue }/>
                ))
            }            
        </div>
    )
}
