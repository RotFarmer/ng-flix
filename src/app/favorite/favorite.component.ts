import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../interface/movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  watchlist: Movie[] = [];
  constructor(private service: MoviesService, private router: Router) {}

  ngOnInit(): void {
   
    this.watchlist = this.service.getWatchlist();
    this.checkWatchlist(this.watchlist, this.watchlist);
  }

  showDetail = (detailGuy: Movie): void => {
    this.service.detailNavigate(detailGuy);
    this.router.navigate(['/movie-detail'], {
      queryParams: {
        movie: detailGuy.id,
      },
    });
  };

  toggleWatchlist = (movie: Movie): void => {
    this.service.editWatchlist(movie);
    console.log(this.watchlist);
    this.service.getWatchlist();
  };
  checkWatchlist = (watchlist: Movie[], movieData: any) => {
    movieData.forEach((item) => {
      let isFavorite = watchlist.some((favorite) => {
        return favorite.id === item.id;
      });
      if (isFavorite) {
        item.favorite = true;
      }
    });
  };
}
