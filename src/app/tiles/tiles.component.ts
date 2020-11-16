import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../interface/movie';
import { Genre } from '../interfaces/genre';
import { MoviesService } from '../movies.service';
// import {movie} from '../interface/movie';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  @Input() movieRef: any;
  @Output() watchlistEvent = new EventEmitter<Movie>();
  @Output() detailEvent = new EventEmitter<Movie>();
  homePage:boolean;
  genres:Genre[]=[
    {
      id: 28,
      name: "Action"
  },
  {
      id: 12,
      name: "Adventure"
  },
  {
      id: 16,
      name: "Animation"
  },
  {
      id: 35,
      name: "Comedy"
  },
  {
      id: 80,
      name: "Crime"
  },
  {
      id: 99,
      name: "Documentary"
  },
  {
      id: 18,
      name: "Drama"
  },
  {
      id: 10751,
      name: "Family"
  },
  {
      id: 14,
      name: "Fantasy"
  },
  {
      id: 36,
      name: "History"
  },
  {
      id: 27,
      name: "Horror"
  },
  {
      id: 10402,
      name: "Music"
  },
  {
      id: 9648,
      name: "Mystery"
  },
  {
      id: 10749,
      name: "Romance"
  },
  {
      id: 878,
      name: "Science Fiction"
  },
  {
      id: 10770,
      name: "TV Movie"
  },
  {
      id: 53,
      name: "Thriller"
  },
  {
      id: 10752,
      name: "War"
  },
  {
      id: 37,
      name: "Western"
  }
  ]
  constructor() { }

  ngOnInit(): void {
    // this.router.url === '/home'
    // ? (this.homePage = true)
    // : (this.homePage = false);
  }

  toggleWatchlist = (movie: any) => {
    let watchlistGuy: Movie = {
      id: movie.id,
    imdb_id: movie.imdb_id,
    title: movie.title,
    original_title: movie.original_title,
    genres:movie.genre_ids,
    release_date: movie.release_date,
    runtime: movie.runtime,
    poster_path: movie.poster_path,
    vote_average: movie.vote_average,
    budget: movie.budget,
    revenue: movie.revenue,
    adult: movie.adult,
    overview: movie.overview
    };
    this.watchlistEvent.emit(watchlistGuy);
  };

  showDetail = (movie:any) =>{
    let detailGuy:Movie={
      id: movie.id,
    imdb_id: movie.imdb_id,
    title: movie.title,
    original_title: movie.original_title,
    genres:this.setGenre_ids(movie.genre_ids),
    release_date: movie.release_date,
    runtime: movie.runtime,
    poster_path: movie.poster_path,
    vote_average: movie.vote_average,
    budget: movie.budget,
    revenue: movie.revenue,
    adult: movie.adult,
    overview: movie.overview
    }
    this.detailEvent.emit(detailGuy)
  }
  setGenre_ids=(genre_ids:any):any=>{
      console.log(genre_ids)
     let newGenre_ids = genre_ids.forEach(id=>{
          if(id = 28){
                id = "action"
            }
          else if(id = 12){
              id = "adventure"
          }
          else if(id = 16){
              id = "animation"
          }
          else if(id = 35){
              id = "comedy"
          }
          else if(id = 80){
              id = "crime"
          }
          else if(id = 99){
              id = "documentary"
          }
          else if(id = 18){
              id = "drama"
          }
          else if(id = 10751){
              id = "family"
          }
          else if(id = 14){
              id = "fantasy"
          }
          else if(id = 36){
              id = "history"
          }
          else if(id = 27){
              id = "horror"
          }
          else if(id = 10402){
              id = "music"
          }
          else if(id = 9648){
              id = "mystery"
          }
          else if(id = 10749){
              id = "romance"
          }
          else if(id = 878){
              id = "science fiction"
          }
          else if(id = 10770){
              id = "tv movie"
          }
          else if(id = 53){
              id = "thriller"
          }
          else if(id = 10752){
              id = "war"
          }
          else if(id = 37){
              id = "western"
          }
      });
      console.log(newGenre_ids)
      return newGenre_ids
  }
}
