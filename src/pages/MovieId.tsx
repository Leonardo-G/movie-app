import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchGetMovie } from '../helpers/fetchApi';
import { MovieDetail } from '../interfaces/bodyAPI';

import "../styles/pages/MovieView.css";

export const MovieId = () => {

    const { id } = useParams()
    const [movie, setMovie] = useState<MovieDetail | null >(null);
    const [videoKey, setVideoKey] = useState<string>("");

    const getMovie = async () => {
        
        const [ getMovie, getVideo ] = await Promise.all([
            fetchGetMovie(id as string),
            fetchGetMovie(id as string, "videos")
        ])

        const key = getVideo.results.filter( (r:any) => r.site === "YouTube" && r.type === "Teaser")[0];

        setVideoKey(key.key)
        setMovie(getMovie);
    }

    useEffect(() => {
        getMovie();
        // eslint-disable-next-line
    }, [])
    
    return (
        <section className='container'>
            {
                movie &&
                <>
                    <div className='movieDetail'>
                        <div className='movieDetail__poster'>
                            {
                                movie.poster_path &&
                                <img src={process.env.REACT_APP_URL_IMAGE + movie.poster_path} alt="" />
                            }
                            {
                                movie.homepage &&
                                <a href={ movie.homepage } target="_blank" rel="noreferrer" title='Web'>
                                    <FontAwesomeIcon icon={ faGlobe }/>
                                </a> 
                            }
                        </div>
                        <div className='movieDetail__info'>
                            <h1>{movie.title}</h1>
                            <p><span>Original Title: </span> { movie.original_title }</p>
                            <p><span>Year: </span> { movie.release_date }</p>
                            <p><span>Gnres: </span>
                                {
                                    movie.genres.map( m => "  " + m.name)
                                }
                            </p>
                            <p className='info--synopsis'><span>Synopsis: </span> { movie.overview }</p>
                            <p><span>Duration: </span> { movie.runtime } minutes</p>
                        </div>
                    </div>
                    <div className='trailer'>
                        <h2>Trailer</h2>
                        <iframe
                            src={`https://www.youtube.com/embed/${videoKey}`} 
                            title="Trailer Movie"
                        >
                        </iframe>
                    </div>
                </>
            }
        </section>
    )
}
