import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './interface/movie';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
/*Array of numbers
everytime you favorite a movie, put that id in the array
everytime you remove a favorite, remove from the array
have a check when displaying all movies on screen if their movie id matches an id in the array
if so add the css class
*/
export class MoviesService {
  movieBaseUrl: string = 'https://api.themoviedb.org/3/search/movie/';
  trendingUrl: string = 'https://api.themoviedb.org/3/trending/movie/week';
  discoverUrl: string = "https://api.themoviedb.org/3/discover/movie/";
  genreUrl: string = "https://api.themoviedb.org/3/genre/movie/list";
  key: string = '86383bda503ee8f95b87e3d3c3499724';
  watchlist: Movie[] = [];
  detailGuy: Movie;
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  getMovies = (searchTerm: string): any => {
    return this.http.get(this.movieBaseUrl, {
      params: {
        api_key: this.key,
        query: searchTerm,
      },
    });
  };
  getLatest = () => {
    return this.http.get(this.trendingUrl, {
      params: {
        api_key: this.key,
      },
    });
  };
  getDiscover = (queryParams:any)=>{
    let parameters:any ={
      api_key: this.key,
      language: "en-Us",
      
    }
    if(queryParams.year){
      parameters["primary_release_year"]=queryParams.year
    }
    if(queryParams.rating){
      parameters["vote_average.gte"]=queryParams.rating
      parameters["vote_count.gte"]=500
    }
    if(queryParams.genre){
      parameters.with_genres = queryParams.genre
    }
    if(queryParams.sort_by){
      parameters.sort_by = queryParams.sort_by
    }
    if(queryParams.page){
      parameters.page = queryParams.page
    }
    console.log(parameters);
    
    return this.http.get("https://api.themoviedb.org/3/discover/movie?", {
      params:parameters,
    })
  }
  
  // getGenre = () =>{
  //   return this.http.get(this.genreUrl, {
  //     params:{
  //       api_key: this.key,
  //       //language : "en-US",
  //     }
  //   })
  // }
 
  // changePage = (page: number): any =>{
  //   return this.http.get(this.page, {
  //     params: {
  //       api_key: this.key,
  //       query: page,
  //     }
  //   })
  // }
  editWatchlist = (watchlistGuy: Movie): void => {
    let index = this.watchlist.findIndex((item) => {
      return item.id === watchlistGuy.id;
    });
    if (index === -1) {
      watchlistGuy.isFavorite = true;
      this.watchlist.push(watchlistGuy);
      
    } else {
      watchlistGuy.isFavorite = false;
      this.watchlist.splice(index, 1);
    }
    console.log(this.watchlist);
    this.getWatchlist()
  };



  getWatchlist = () => {
    return this.watchlist;
  };

  getDetailGuy = () => {
    return this.detailGuy;
  };

  detailNavigate = (detailGuy: Movie) => {
    this.detailGuy = detailGuy;
    console.log(detailGuy);
  };
}
