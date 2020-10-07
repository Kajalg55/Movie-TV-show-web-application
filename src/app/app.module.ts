import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule , FormsModule}    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { ToastrModule } from 'ngx-toastr';


import { MoviesComponent } from './movies/movies.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchMoviesComponent } from './search/search-movies.component';
import {AppGlobals} from './app.global'
import {RatingComponent } from './rating/rating.component';
import { TvShowDetailsComponent } from './tvshow-details/tvshow-details.component';

import { MoviesService } from './movies/movies.service';
import { SearchService } from './search/search.service';
import { MovieDetailService } from './movie-details/movie-details.service';
import { TvShowDetailService } from './tvshow-details/tvshow-details.service';
import { RatingService } from './rating/rating.service';
import { BarRatingModule } from "ngx-bar-rating";
import {TabViewModule} from 'primeng/tabview';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule ({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        FormsModule,
        NgSelectModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        HttpModule,
        BarRatingModule,
        TabViewModule,
        AngularFontAwesomeModule
     
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        MoviesComponent,
        SearchComponent,
        MovieDetailsComponent,
        PageNotFoundComponent,
        SearchMoviesComponent,
        RatingComponent,
        TvShowDetailsComponent
     ],
    providers: [
        AppGlobals,MoviesService,SearchService,MovieDetailService,RatingService,TvShowDetailService

        // provider used to create fake backend
        
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }