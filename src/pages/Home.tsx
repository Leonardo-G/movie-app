import { useContext, useEffect, useState } from 'react';

import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';

import { Movie } from '../components/Movie';
import { Discover } from '../interfaces/bodyAPI';
import { RatingStars } from '../components/filters/RatingStars';
import { FilterContext } from '../context/filterContext';
import { Spinner } from '../components/UI/Spinner';
import { Header } from '../components/UI/Header';
import { Title } from '../components/UI/Title';

import "../styles/pages/Home.css";

export const Home = () => {

    const { starValue, searchValue } = useContext( FilterContext );
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
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=es-AR&sort_by=popularity.desc&vote_average.gte=${ (starValue * 2) - 2}&vote_average.lte=${ starValue * 2 }&adult=false`)
                const result = await response.json();
                console.log(result)
                setMovies(result);
            }
        
        } catch (error) {
            console.log(error)    
        } finally{
            setLoading(false)
        }
    }

    const fetchSearcAPI = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${searchValue}`)
        const result = await response.json();
        console.log(result)
        setMovies(result);
    }

    useEffect( () => {
        if(searchValue === ""){
            fetchApi()
        }else{
            fetchSearcAPI()
        }
    }, [starValue, searchValue])

    return (
        <>
            {
                loading &&
                <Spinner />
            }
            <Header />
            <section className='container'>
                <div className='flex'>
                    <Title title={ "Popular Movies" } icon={ faFireFlameCurved }/>
                    {
                        searchValue === "" &&
                        <RatingStars />
                    }
                </div>

                <div className='movies'>
                {
                    movies?.results.length !== 0 &&
                    movies?.results.map( (movie, idx) => (
                        <Movie key={ movie.id } idx={ idx } { ...movie }/>
                    ))
                }
                </div>
            </section>
        </>
    )
}
