import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() submitEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  getSearchTerm = (form: NgForm): void => {
    console.log(form);
    this.submitEvent.emit(form.value.searchTerm);
  };

}
