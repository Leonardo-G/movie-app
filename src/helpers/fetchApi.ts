export const fetchGetMovies = async ( params: string, query: string ) => {
    const response = await fetch(`https://api.themoviedb.org/3/${params}/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&${ query && query }&include_adult=false&vote_count.gte=20`);
    const result = await response.json();

    return result;
}

export const fetchGetMovie = async ( id: string, params?: string ) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}${ params && "/" + params }?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false`);
    const result = await response.json();

    return result;
}