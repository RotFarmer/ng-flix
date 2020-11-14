import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
movieBaseUrl: string = "https://api.themoviedb.org/3/search/movie/";
trendingUrl:string="https://api.themoviedb.org/3/trending/movie/week"
key: string = "86383bda503ee8f95b87e3d3c3499724";
// favorites: Favorites[] = [];
  constructor(private http:HttpClient) { }
  getMovies = (searchTerm:string):any => {
    return this.http.get(this.movieBaseUrl,{
      params:{
        api_key:this.key,
        query:searchTerm,
      }
    })
  }
  getLatest =()=>{
    return this.http.get(this.trendingUrl,{
      params:{
        api_key:this.key,
      
      }
    })
  }
}
