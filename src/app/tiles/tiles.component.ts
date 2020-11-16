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
  homePage: boolean;

  constructor() {}

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
      genres: this.setGenre_ids(movie.genre_ids),
      release_date: movie.release_date,
      runtime: movie.runtime,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
      budget: movie.budget,
      revenue: movie.revenue,
      adult: movie.adult,
      overview: movie.overview,
    };
    this.watchlistEvent.emit(watchlistGuy);
  };

  showDetail = (movie: any) => {
    let detailGuy: Movie = {
      id: movie.id,
      imdb_id: movie.imdb_id,
      title: movie.title,
      original_title: movie.original_title,
      genres: this.setGenre_ids(movie.genre_ids),
      release_date: movie.release_date,
      runtime: movie.runtime,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
      budget: movie.budget,
      revenue: movie.revenue,
      adult: movie.adult,
      overview: movie.overview,
    };
    this.detailEvent.emit(detailGuy);
  };
  setGenre_ids = (genre_ids: any[]): any[] => {
    console.log(genre_ids);
    let newGenre_ids: string[] = [];
    genre_ids.forEach((item) => {
      if (item === 28) {
        newGenre_ids.push('action');
      } else if (item === 12) {
        newGenre_ids.push('adventure');
      } else if (item === 16) {
        newGenre_ids.push('animation');
      } else if (item === 35) {
        newGenre_ids.push('comedy');
      } else if (item === 80) {
        newGenre_ids.push('crime');
      } else if (item === 99) {
        newGenre_ids.push('documentary');
      } else if (item === 18) {
        newGenre_ids.push('drama');
      } else if (item === 10751) {
        newGenre_ids.push('family');
      } else if (item === 14) {
        newGenre_ids.push('fantasy');
      } else if (item === 36) {
        newGenre_ids.push('history');
      } else if (item === 27) {
        newGenre_ids.push('horror');
      } else if (item === 10402) {
        newGenre_ids.push('music');
      } else if (item === 9648) {
        newGenre_ids.push('mystery');
      } else if (item === 10749) {
        newGenre_ids.push('romance');
      } else if (item === 878) {
        newGenre_ids.push('science fiction');
      } else if (item === 10770) {
        newGenre_ids.push('tv movie');
      } else if (item === 53) {
        newGenre_ids.push('thriller');
      } else if (item === 10752) {
        newGenre_ids.push('war');
      } else if (item === 37) {
        newGenre_ids.push('western');
      }
    });
    console.log(newGenre_ids);
    return newGenre_ids;
  };
}
