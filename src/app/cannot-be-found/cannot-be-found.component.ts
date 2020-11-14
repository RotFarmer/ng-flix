import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-cannot-be-found',
  templateUrl: './cannot-be-found.component.html',
  styleUrls: ['./cannot-be-found.component.css']
})
export class CannotBeFoundComponent implements OnInit {

  constructor( private service:MoviesService) { }

  ngOnInit(): void {
  }

}
