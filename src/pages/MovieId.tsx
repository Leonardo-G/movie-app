import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MovieDetail } from '../interfaces/bodyAPI';

import "../styles/pages/MovieView.css";

export const MovieId = () => {

    const { id } = useParams()
    const [movie, setMovie] = useState<MovieDetail | null >(null);
    const [videoKey, setVideoKey] = useState<string>("");

    const getMovie = async () => {
        
        const result = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        const resp = await result.json();

        const result1 = await fetch(`https://api.themoviedb.org/3/movie/${ id }/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        const resp1 = await result1.json();

        const key = resp1.results.filter( (r:any) => r.site === "YouTube" && r.type === "Teaser")[0];
        console.log(key)

        setVideoKey(key.key)
        setMovie(resp);
    }

    useEffect(() => {
        getMovie()
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
