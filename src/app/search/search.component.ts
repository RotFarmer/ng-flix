import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() submitEvent = new EventEmitter<string>();
  
  constructor(private service:MoviesService) { }

  ngOnInit(): void {
  }

  getSearchTerm = (form: NgForm): void => {
    console.log(form.value);
    let searchTerm = form.value.searchTerm
    this.submitEvent.emit(searchTerm.replace(/%20/g, '+'));
  };

}
