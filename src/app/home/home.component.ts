import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../interface/movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movieData: any;
  watchlist: Movie[] = [];
  page: number = 1;
  showForm:boolean =false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: MoviesService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.watchlist = this.service.getWatchlist();
    this.route.queryParamMap.subscribe((response) => {
      let test: any = response;
      let term = response.get('term');
      if (term === null && test.params === null) {
        this.service.getLatest().subscribe((response) => {
          this.movieData = response;
          this.watchlist = this.service.getWatchlist();
          this.checkWatchlist(this.watchlist, this.movieData);
        });
      } else if (term !== null) {
        this.service.getMovies(term).subscribe((response) => {
          this.movieData = response;
          this.watchlist = this.service.getWatchlist();
          this.checkWatchlist(this.watchlist, this.movieData);
        });
      } else {
        this.service.getDiscover(test.params).subscribe((response) => {
          this.movieData = response;
          this.watchlist = this.service.getWatchlist();
          this.checkWatchlist(this.watchlist, this.movieData);
        });
      }
    });
  }

  toggleWatchlist = (watchlistGuy: Movie): void => {
    this.service.editWatchlist(watchlistGuy);
    this.watchlist = this.service.getWatchlist();
    this.checkWatchlist(this.watchlist, this.movieData);
    console.log(this.movieData);
  };

  showDetail = (detailGuy: Movie): void => {
    this.service.detailNavigate(detailGuy);
    this.router.navigate(['/movie-detail'], {
      queryParams: {
        movie: detailGuy.id,
      },
    });
  };

  checkWatchlist = (watchlist: Movie[], movieData: any) => {
    movieData.results.forEach((item) => {
      let isFavorite = watchlist.some((favorite) => {
        return favorite.id === item.id;
      });
      if (isFavorite) {
        item.favorite = true;
      } else {
        item.favorite = false;
      }
    });
  };

  makeFormAppear =()=>{
    if(this.showForm === false){
      this.showForm = true;
    }else if(this.showForm === true){
      this.showForm = false;
    }
  }
}
