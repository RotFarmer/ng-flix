import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesService } from '../movies.service';
import {Genre} from '../interfaces/genre'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() submitEvent = new EventEmitter<string>();
  @Output() paramEvent = new EventEmitter<object>();
  genres:Genre[]=[
    {
      id: 28,
      name: "Action"
  },
  {
      id: 12,
      name: "Adventure"
  },
  {
      id: 16,
      name: "Animation"
  },
  {
      id: 35,
      name: "Comedy"
  },
  {
      id: 80,
      name: "Crime"
  },
  {
      id: 99,
      name: "Documentary"
  },
  {
      id: 18,
      name: "Drama"
  },
  {
      id: 10751,
      name: "Family"
  },
  {
      id: 14,
      name: "Fantasy"
  },
  {
      id: 36,
      name: "History"
  },
  {
      id: 27,
      name: "Horror"
  },
  {
      id: 10402,
      name: "Music"
  },
  {
      id: 9648,
      name: "Mystery"
  },
  {
      id: 10749,
      name: "Romance"
  },
  {
      id: 878,
      name: "Science Fiction"
  },
  {
      id: 10770,
      name: "TV Movie"
  },
  {
      id: 53,
      name: "Thriller"
  },
  {
      id: 10752,
      name: "War"
  },
  {
      id: 37,
      name: "Western"
  }
  ]
  constructor(private service:MoviesService) { }

  ngOnInit(): void {
  }

  getSearchTerm = (form: NgForm): void => {
    console.log(form.value);
    let searchTerm = form.value.searchTerm
    this.submitEvent.emit(searchTerm);
    form.reset();
  };
  setParams = (form:NgForm) =>{
    let queryParams = form.value;
    this.paramEvent.emit(queryParams)
    form.reset();
  }

  // getGenres=()=>{
  //  console.log(this.service.getGenre())
  // }
}
