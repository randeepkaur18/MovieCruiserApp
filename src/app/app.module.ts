import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieAppMaterialModule } from './movie-app-material.module';
import { MoviesComponent } from './movies/movies.component';

import { SearchModule } from './search-bar/search.module';
import { MoviesService } from './movies/movies.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'path/:movieName',  component: MoviesComponent }
  ];


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovieAppMaterialModule,
    SearchModule,
    [ RouterModule.forRoot(routes) ]
  ],

  exports: [ RouterModule ],

  providers: [ MoviesService ],
  bootstrap: [ AppComponent ]

})

/* AppModule class */
export class AppModule { }
