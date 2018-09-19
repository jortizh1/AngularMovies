import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class MoviesService {

    movies:{
        /*Poster: string,
        Title: string,
        Year: string*/
      } [] = [];

   constructor(private url: Http) {  }   

   load_movies(movie: string, page: number) {
       //console.log("Hola");
       return this.url.get('http://www.omdbapi.com/?apikey=26be8198&s='+movie+'&page='+page);
   }

   setMovie(Response){
    this.movies.push(Response);
    console.log(this.movies);
  }
}