import { Component, OnInit } from '@angular/core';
import { Movie } from '../interface/movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
detailGuy: Movie;
  constructor(private service:MoviesService) { }

  ngOnInit(): void {
    this.detailGuy = this.service.getDetailGuy();
    console.log(this.detailGuy)
  }

  
}
