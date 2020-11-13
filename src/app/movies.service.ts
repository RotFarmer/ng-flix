import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
movieBaseUrl: string = "https://api.themoviedb.org";
key: string = "86383bda503ee8f95b87e3d3c3499724";
  constructor() { }
}
