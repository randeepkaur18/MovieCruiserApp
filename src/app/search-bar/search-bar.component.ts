import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css']
})

export class SearchBarComponent {
	constructor( private router: Router ) { }


	searchMovie(movieName: string) {
		this.router.navigate(['path', movieName]);
	};

}
