import { useContext, useEffect, useState } from 'react';

import { Movie } from '../components/Movie';
import { Discover } from '../interfaces/bodyAPI';

import "../styles/pages/Home.css";
import { RatingStars } from '../components/RatingStars';
import { StarContext } from '../context/StarContext';
import { Spinner } from '../components/UI/Spinner';
import { Header } from '../components/UI/Header';

export const Home = () => {

    const { starValue } = useContext( StarContext );
    const [movies, setMovies] = useState<Discover | null>(null);
    const [loading, setLoading] = useState<boolean>(false)

    const fetchApi = async ( ) => {
        try {
            setLoading(true)
            if( starValue === 0 ){
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=es-AR&sort_by=popularity.desc&adult=false`)
                const result = await response.json();
        
                setMovies(result);
            }else{
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=es-AR&sort_by=popularity.desc&vote_average.lte=${starValue * 2}`)
                const result = await response.json();
        
                setMovies(result);
            }
        
        } catch (error) {
            console.log(error)    
        } finally{
            setLoading(false)
        }
    }

    useEffect( () => {
    //    fetchApi()
    }, [starValue])

    return (
        <>
            {
                loading &&
                <Spinner />
            }
            <Header />
            <RatingStars />
            <section className='container'>
                <div className='movies'>
                {
                    movies?.results.map( movie => (
                        <Movie key={ movie.id } { ...movie }/>
                    ))
                }
                </div>
            </section>
        </>
    )
}
