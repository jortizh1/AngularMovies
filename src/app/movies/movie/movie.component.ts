import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.services';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
 
  movie:{
    name: string, 
    age: number, 
    charge: string, 
    state: string
  } [] = [];
  constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const imdbID = this.route.snapshot.params.imdbID;
    const type = this.route.snapshot.params.type;

    this.route.params.subscribe(
      (params: Params)=>{
        this.moviesService.load_movies(params.imdbID, params.type, 'none').subscribe(
          (respuesta)=> {
            console.log(respuesta);
            this.movie = respuesta;
          });
      }
    )

    this.moviesService.load_movies(imdbID, type, 'none').subscribe(
      (respuesta)=> {
        console.log(respuesta);
        this.movie = respuesta;
      }
    );
  }
}