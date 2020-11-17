import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../interface/movie';
import { Genre } from '../interfaces/genre';
import { MoviesService } from '../movies.service';
// import {movie} from '../interface/movie';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css'],
})
export class TilesComponent implements OnInit {
  @Input() movieRef: any;
  @Output() watchlistEvent = new EventEmitter<Movie>();
  @Output() detailEvent = new EventEmitter<Movie>();


  constructor() {}

  ngOnInit(): void {

  }

  toggleWatchlist = (movie: any) => {
    let watchlistGuy: Movie = {
      id: movie.id,
      imdb_id: movie.imdb_id,
      title: movie.title,
      original_title: movie.original_title,
      genre_ids: this.setGenre_ids(movie.genre_ids),
      release_date: movie.release_date,
      runtime: movie.runtime,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
      budget: movie.budget,
      revenue: movie.revenue,
      adult: movie.adult,
      overview: movie.overview,
      isFavorite: movie.isFavorite,
    };
    this.watchlistEvent.emit(watchlistGuy);
  };

  showDetail = (movie: any) => {
    let detailGuy: Movie = {
      id: movie.id,
      imdb_id: movie.imdb_id,
      title: movie.title,
      original_title: movie.original_title,
      genre_ids: this.setGenre_ids(movie.genre_ids),
      release_date: this.sliceDate(movie.release_date),
      runtime: movie.runtime,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
      budget: movie.budget,
      revenue: movie.revenue,
      adult: movie.adult,
      overview: movie.overview,
      isFavorite: movie.isFavorite,
    };
    this.detailEvent.emit(detailGuy);
  };

  sliceDate = (date:string):string =>{
    let sliced = date.slice(0,4);
    return sliced;
  }
  setGenre_ids = (genre_ids: any[]): any[] => {
    let newGenre_ids: any[] = [];
    genre_ids.forEach((item) => {
      if (item === 28 || item === 'action') {
        newGenre_ids.push(' Action');
      } else if (item === 12 || item === 'adventure') {
        newGenre_ids.push(' Adventure');
      } else if (item === 16 || item === 'animation') {
        newGenre_ids.push(' Animation');
      } else if (item === 35 || item === 'comedy') {
        newGenre_ids.push(' Comedy');
      } else if (item === 80 || item === 'crime') {
        newGenre_ids.push(' Crime');
      } else if (item === 99 || item === 'documentary') {
        newGenre_ids.push(' Documentary');
      } else if (item === 18 || item === 'drama') {
        newGenre_ids.push(' Drama');
      } else if (item === 10751 || item === 'family') {
        newGenre_ids.push(' Family');
      } else if (item === 14 || item === 'fantasy') {
        newGenre_ids.push(' Fantasy');
      } else if (item === 36 || item === 'history') {
        newGenre_ids.push(' History');
      } else if (item === 27 || item === 'horror') {
        newGenre_ids.push(' Horror');
      } else if (item === 10402 || item === 'music') {
        newGenre_ids.push(' Music');
      } else if (item === 9648 || item === 'mystery') {
        newGenre_ids.push(' Mystery');
      } else if (item === 10749 || item === 'romance') {
        newGenre_ids.push(' Romance');
      } else if (item === 878 || item === 'science fiction') {
        newGenre_ids.push(' Science Fiction');
      } else if (item === 10770 || item === 'tv movie') {
        newGenre_ids.push(' TV Movie');
      } else if (item === 53 || item === 'thriller') {
        newGenre_ids.push(' Thriller');
      } else if (item === 10752 || item === 'war') {
        newGenre_ids.push(' War');
      } else if (item === 37 || item === 'western') {
        newGenre_ids.push(' Western');
      }
    });
   
    return newGenre_ids;
  };
}
