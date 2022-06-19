import React, { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Movies } from "../interfaces/bodyAPI";

import "../styles/components/Movie.css";
import { faStar } from '@fortawesome/free-regular-svg-icons';

export const Movie:FC<Movies> = ({title, poster_path, backdrop_path, vote_average}) => {
    return (
        <a className='movie'>
            <div className="movie__img">
                <img src={ process.env.REACT_APP_URL_IMAGE + poster_path } alt={ title } />
            </div>
            <div className="movie__title">
                <p className='title--p'>{ title }</p>
                <div className='title--rate'>
                    <p>{ vote_average }</p>
                    <FontAwesomeIcon icon={ faStar } />
                </div>
            </div>
            <div className='movie__background'>
                <p>{ title }</p>
            </div>
        </a>
    )
}
