import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../interface/movie';
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
  constructor() { }

  ngOnInit(): void {
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
    genres:movie.genre_ids,
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
}
