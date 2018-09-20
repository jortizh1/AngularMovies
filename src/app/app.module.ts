import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MoviesService } from './services/movies.services';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';

const appRoutes: Routes = [
  { path: 'movies/:movie/:type/:page', component: MoviesComponent },
  { path: 'movie/:imdbID/:type', component: MovieComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
