import React, { FC } from 'react'
import { Link } from 'react-router-dom';

import { Movies } from '../../interfaces/bodyAPI';

import "../../styles/components/Movie.css";

interface Props extends Movies{
    idx: number;
    top?: boolean;
}

export const Movie:FC<Props> = ({title, poster_path, idx, release_date, id, top }) => {

    const year = release_date && release_date.split("-")[0]

    return (
        <Link
            to={ `/movie/${id}` }
            className={`movie ${ idx === 0 && top && "popular"}`}
        >
            <div className="movie__img">
                {
                    poster_path 
                    ?
                        <img src={ process.env.REACT_APP_URL_IMAGE + poster_path } alt={ title } />
                    : 
                        <img src="/assets/movie.jpg" alt={ title } />

                }
            </div>
            <div className='movie__background'>
                {
                    release_date &&
                    <p className='background--year'>{ year }</p>
                }
                <p>{ title }</p>
            </div>
        </Link>
    )
}
