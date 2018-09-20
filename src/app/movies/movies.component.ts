import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.services';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const movie = this.route.snapshot.params.movie;
    const page = this.route.snapshot.params.page;
    const type = this.route.snapshot.params.type;

    this.route.params.subscribe(
      (params: Params)=>{
        this.moviesService.load_movies(params.movie, params.type, params.page).subscribe(
          (respuesta)=> {
            this.movies = respuesta.Search;
          });
      }
    )

    this.moviesService.load_movies(movie, type, page).subscribe(
      (respuesta)=> {
        this.movies = respuesta.Search;
      }
    );

    //this.movies = this.moviesService.movies;

    //console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ");
    //console.log(this.movies);
    //console.log("Adioooooooooooooooooooos");
  }
}