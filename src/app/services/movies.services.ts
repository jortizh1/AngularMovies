import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()
export class MoviesService {

   //movies: any;
   pages: string = '';

   constructor(private url: Http, private route: ActivatedRoute) {  } 

   load_movies(movie: string, type: string, page?: string) {
       //console.log("Hola");
       if(page != 'none'){
           this.pages = '&page='+page;
        }
        //console.log('http://www.omdbapi.com/?apikey=26be8198&'+type+'='+movie+this.pages);
       return this.url.get('http://www.omdbapi.com/?apikey=26be8198&'+type+'='+movie+this.pages).pipe(map(
           (parametro: Response)=>{
               return parametro.json();
           }
       ))
   }

   /*setMovie(Response){
    this.movies = Response;
    console.log(this.movies);
   }*/
}