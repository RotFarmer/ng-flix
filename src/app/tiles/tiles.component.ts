import { Component, Input, OnInit } from '@angular/core';
// import {movie} from '../interface/movie';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  @Input() movieRef: any;
  constructor() { }

  ngOnInit(): void {
  }

}
