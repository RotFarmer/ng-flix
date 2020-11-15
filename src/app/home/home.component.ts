import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: MoviesService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((response) => {
      let queryParams = response;
      if (queryParams.get('term') === null) {
        this.service
          .getLatest().subscribe((response)=>{
            this.movieData=response
            console.log(this.movieData);
            
          })
      } else {
        this.service
          .getMovies(queryParams.get('term'))
          .subscribe((response) => {
            console.log(response);
            this.movieData = response;
          });
      }
    });
  }

  search = (term: string) => {
    this.router.navigate(['/home'], {
      queryParams: {
        term: term,
      },
    });
  };

  toggleWatchlist = (watchlistGuy: Movie):void =>{
    this.service.editWatchlist(watchlistGuy);
  }

  showDetail = (detailGuy:Movie):void =>{
    this.service.detailNavigate(detailGuy);
    this.router.navigate(['/movie-detail'],{
      queryParams: {
        movie: detailGuy.id
      }
    })
  }  
}
