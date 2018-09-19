import { Component } from '@angular/core';
import { MoviesService } from './services/movies.services';
//import { MoviesService } from './services/movies.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies';
  movie: string = 'Batman'; 
  page: number = 1; 

  constructor(private serviceMovie: MoviesService){}

  ngOnInit() {
    this.serviceMovie.load_movies(this.movie, this.page).subscribe(
      (Response)=> this.serviceMovie.setMovie(Response.json().Search));
  }

  onSearchMovie(){
    console.log(this.movie);
    //this.serviceMovie.load_movies(this.movie).subscribe(
    //  (Response)=> this.serviceMovie.setMovie(Response.json().Search));
    //console.log(this.movie);
    //console.log("HOLAAAAAAAAAAAAAAAAAAAAA ");
  }
}