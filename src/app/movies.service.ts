import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Movie } from './interface/movie';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
movieBaseUrl: string = "https://api.themoviedb.org/3/search/movie/";
trendingUrl:string="https://api.themoviedb.org/3/trending/movie/week"
key: string = "86383bda503ee8f95b87e3d3c3499724";
 watchlist: Movie[] = [];
 detailGuy: Movie;
  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { }
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

  editWatchlist = (watchlistGuy: Movie): void => {
    let index = this.watchlist.findIndex((item) => {
      return item.id === watchlistGuy.id;
    });
    if (index === -1) {
      this.watchlist.push(watchlistGuy);
    } else {
      this.watchlist.splice(index, 1);
    }
    console.log(this.watchlist);
  };

  getWatchlist= ()=>{
    return this.watchlist;
  }

  getDetailGuy = () =>{
   return this.detailGuy;
  }

  detailNavigate = (detailGuy:Movie)=>{
    this.detailGuy = detailGuy;
    console.log(detailGuy)
  }
}
