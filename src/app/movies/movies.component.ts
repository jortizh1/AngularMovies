import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.services';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.movies = this.moviesService.movies;
    //console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ");
    //console.log(this.movies);
    //console.log("Adioooooooooooooooooooos");
  }

}