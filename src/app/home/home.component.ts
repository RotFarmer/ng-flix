import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieData: any;

  constructor(private router: Router, private route: ActivatedRoute, private service: MoviesService) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((response) => {
      let queryParams = response;
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

}
