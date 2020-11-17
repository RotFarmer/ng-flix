import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesService } from '../movies.service';
import {Genre} from '../interfaces/genre'
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() showFilterEvent = new EventEmitter<object>();
  
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
  constructor(private service:MoviesService,private router:Router) { }

  ngOnInit(): void {
  }

  getSearchTerm = (form: NgForm): void => {
    this.router.navigate(['/home'], {
        queryParams:{
            term:form.value.searchTerm,
        }
    })
  };
  
  setParams = (form:NgForm) =>{
    let parameters:any = {}
    if(form.value.genre){
        parameters.genre=form.value.genre
    }
    if(form.value.page){
        parameters.page=form.value.page
    }
    if(form.value.rating){
        parameters.rating=form.value.rating
        
    }
    if(form.value.sort_by){
        parameters.sort_by=form.value.sort_by
    }
    if(form.value.year){
        parameters.year=form.value.year
    }
    this.router.navigate(['/home'],{
        queryParams:parameters
    })
  }

 //   showFilter = ():void =>{
      
 //   }




  // getGenres=()=>{
  //  console.log(this.service.getGenre())
  // }
}
