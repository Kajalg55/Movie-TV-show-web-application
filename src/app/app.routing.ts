import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchMoviesComponent } from './search/search-movies.component';
import {RatingComponent } from './rating/rating.component';
import { TvShowDetailsComponent } from './tvshow-details/tvshow-details.component';
import {ActorComponent} from './actor/actor.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: MoviesComponent },
    { path: 'movie/:id', component: MovieDetailsComponent },
    { path: 'tvshow/:id', component: TvShowDetailsComponent },
    { path: 'search/:query', component: SearchMoviesComponent },
    { path: 'rating', component: RatingComponent  },
    { path: 'actor/:id', component: ActorComponent },
    { path: '**',component: PageNotFoundComponent },
   
  ];

export const routing = RouterModule.forRoot(appRoutes,{useHash :true});