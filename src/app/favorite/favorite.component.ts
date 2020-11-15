import { Component, OnInit } from '@angular/core';
import { Movie } from '../interface/movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  watchlist: Movie[]=[];
  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.watchlist = this.service.getWatchlist();
  }

}
