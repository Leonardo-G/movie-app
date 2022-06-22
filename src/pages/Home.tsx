import { useContext, useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import { faFireFlameCurved, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

import { Movie } from '../components/Movie';
import { Discover, Movies } from '../interfaces/bodyAPI';
import { RatingStars } from '../components/filters/RatingStars';
import { FilterContext } from '../context/filterContext';
import { Spinner } from '../components/UI/Spinner';
import { Header } from '../components/layout/Header';
import { Title } from '../components/UI/Title';
import { fetchGetMovies } from '../helpers/fetchApi';

import "../styles/pages/Home.css";

export const Home = () => {

    const { starValue, searchValue } = useContext( FilterContext );
    const [movies, setMovies] = useState<Discover | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [params, setParams] = useSearchParams({});
    const [moviesRecently, setMoviesRecently] = useState<[Movies] | null>(null);
    
    const fetchApi = async ( ) => {
        try {
            if(params.has("search")){
                setParams({})
            }
            
            setLoading(true)
            
            if( starValue === 0 ){
                const getMovies = await fetchGetMovies("discover","sort_by=popularity.desc")

                setMovies(getMovies);
            }else{
                const getMoviesByRate = await fetchGetMovies("discover", `sort_by=popularity.desc&vote_average.gte=${ (starValue * 2) - 2}&vote_average.lte=${ starValue * 2 }`)
                
                setMovies(getMoviesByRate);
            }
        
        } catch (error) {
            console.log(error);  
        } finally{
            setLoading(false);
        }
    }

    const fetchSearcAPI = async () => {
        try {
            setLoading(true);
            const getMoviesBySearch = await fetchGetMovies("search", `query=${searchValue}`)
            
            setMovies(getMoviesBySearch);
            setParams({
                search: searchValue
            })
        } catch (error) {
            console.log(error);   
        } finally {
            setLoading(false)
        }
    }

    const fetchRecently = async () => {
        const getMoviesRecently = await fetchGetMovies("discover", "sort_by=release_date.desc&vote_average.gte=5&vote_count.gte=50")
      
        const firstMovies = getMoviesRecently.results.filter( (movie:Movies, idx: number) => idx < 6)
        setMoviesRecently(firstMovies);
    }

    useEffect( () => {

        if(searchValue === ""){
            fetchApi();
        }else{
            fetchSearcAPI();
        }

    }, [starValue, searchValue]);

    useEffect(() => {
        fetchRecently();
    }, [])

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
                        <Movie key={ movie.id } idx={ idx } top={ true } { ...movie }/>
                    ))
                }
                </div>
            </section>
            <section className='container'>
                <div className='flex'>
                    <Title title={ "Recently Added" } icon={ faLayerGroup }/>
                </div>
                <div className='movies'>
                    {
                        moviesRecently?.map( (movie, idx) => (
                            <Movie key={ movie.id } idx={ idx } { ...movie }/>
                        ))
                    }
                </div>
            </section>
        </>
    )
}
