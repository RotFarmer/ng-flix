import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../interface/movie';
import { MoviesService } from '../movies.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  movieData: any;
  watchlist: Movie[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: MoviesService
  ) {}

  ngOnInit(): void {
    this.watchlist = this.service.getWatchlist();
    // this.route.queryParamMap.subscribe((response) => {
    //   let queryParams = response;
    //   this.service.getDiscover(queryParams).subscribe((response) => {
    //     console.log(response);
    //     this.movieData = response;
    //   });
    // })
  }

  search = (term: string) => {
    this.router.navigate(['/search-page'], {
      queryParams: {
        term: term,
      },
    });
    console.log(term);
  };

  toggleWatchlist = (watchlistGuy: Movie): void => {
    this.service.editWatchlist(watchlistGuy);
    this.watchlist = this.service.getWatchlist();
    this.checkWatchlist(this.watchlist, this.movieData);
  };

  showDetail = (detailGuy: Movie): void => {
    this.service.detailNavigate(detailGuy);
    this.router.navigate(['/movie-detail'], {
      queryParams: {
        movie: detailGuy.id,
      },
    });
  };

  setParams = (queryParams: object): void => {
    this.router.navigate(['/search-page'], {
      queryParams: queryParams,
    });
    this.service.getDiscover(queryParams).subscribe((response) => {
      console.log(response);
      this.movieData = response;
    });
    this.watchlist = this.service.getWatchlist();
    this.checkWatchlist(this.watchlist, this.movieData);
  };
  checkWatchlist = (watchlist: Movie[], movieData: any) => {
    movieData.results.forEach((item) => {
      let isFavorite = watchlist.some((favorite) => {
        return favorite.id === item.id;
      });
      if (isFavorite) {
        item.favorite = true;
      }
    });
  };
}
