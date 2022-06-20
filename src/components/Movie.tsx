import React, { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

import { Movies } from '../interfaces/bodyAPI';

import "../styles/components/Movie.css";

interface Props extends Movies{
    idx: number;
}

export const Movie:FC<Props> = ({title, poster_path, idx, release_date }) => {

    const year = release_date && release_date.split("-")[0]

    return (
        <a className={`movie ${ idx === 0 && "popular"}`}>
            <div className="movie__img">
                <img src={ process.env.REACT_APP_URL_IMAGE + poster_path } alt={ title } />
            </div>
            <div className='movie__background'>
                {
                    release_date &&
                    <p className='background--year'>{ year }</p>
                }
                <p>{ title }</p>
            </div>
        </a>
    )
}
