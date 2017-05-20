import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class MoviesService {

  constructor(private http: Http) {}

  /* searchMovie method calls on the 
  click of the button which takes movieName as a parameter */
  searchMovie(movieName: string){
  	
    return this.http
               .get('http://www.omdbapi.com/?s='+movieName)
               .map(response => response.json().Search || []);
  }
}
