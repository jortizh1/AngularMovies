import { Component } from '@angular/core';
import { MoviesService } from './services/movies.services';
import { Router } from '@angular/router';
//import { MoviesService } from './services/movies.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies';
  movie: string = 'Batman'; 
  page: string = '1';
  type: string = 's';

  constructor(private serviceMovie: MoviesService, private router: Router){}

  ngOnInit() {
    
  }

  onSearchMovie(){
    //console.log(this.movie);
    this.router.navigate(['/movies', this.movie, this.type, this.page]);
   //this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: 1}, fragment: 'loading'});
    //this.serviceMovie.load_movies(this.movie).subscribe(
    //  (Response)=> this.serviceMovie.setMovie(Response.json().Search));
    //console.log(this.movie);
    //console.log("HOLAAAAAAAAAAAAAAAAAAAAA ");
  }
}