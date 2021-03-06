export interface Discover{
    page: number;
    results: Movies[];
    total_pages: number;
    total_results: number;
}

export interface Movies{
    adult: boolean;
    backdrop_path?: string;
    genre_ids: [number];
    id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path?: string;
    release_date?: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MovieDetail {
    adult: boolean;
    backdrop_path?: string;
    belongs_to_collection?: object;
    budget: number;
    genres: [Genres];
    homepage?: string;
    id: number;
    imdb_id?: string;
    original_language: string;
    original_title: string;
    overview?: string;
    popularity: number;
    poster_path?: string;
    production_companies:[ProductionCompanies];
    production_countries: [ProductionCountries];
    release_date: string;
    revenue: number;
    runtime?: number;
    spoken_languages: [Language];
    status: string;
    tagline?: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface Genres{
    id: number;
    name: string
}

interface ProductionCompanies{
    name: string;
    id: number;
    logo_path?: string;
    origin_country: string; 
}

interface ProductionCountries{
    iso_3166_1: string;
    name: string;
}

interface Language{
    iso_639_1: string;
    name: string;
}