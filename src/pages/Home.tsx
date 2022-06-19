import React, { useEffect, useState } from 'react';

import { Movie } from '../components/Movie';
import { Discover } from '../interfaces/bodyAPI';

import "../styles/pages/Home.css";

export const Home = () => {

    const [movies, setMovies] = useState<Discover | null>(null);

    const fetchApi = async ( ) => {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=es-AR&sort_by=popularity.desc&page=10`)
        const result = await response.json();

        setMovies(result);
    }

    useEffect( () => {
        fetchApi()
    }, [])

    return (
        <section className='container'>
            <div className='movies'>
                {
                    movies?.results.map( movie => (
                        <Movie key={movie.id} { ...movie }/>
                    ))
                }
            </div>
        </section>
    )
}
