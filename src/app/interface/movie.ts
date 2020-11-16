import { Genre } from '../interfaces/genre';

export interface Movie {
    id:number,
    imdb_id:string | null
    title:string,
    original_title:string,
    genre_ids:any,
    release_date:string,
    runtime:number,
    poster_path:string,
    vote_average:number,
    budget:number,
    revenue:number,
    adult:false,
    overview:string,
    isFavorite:boolean,
}
