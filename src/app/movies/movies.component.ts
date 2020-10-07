import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from './movies.service';
import { Movie } from './movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  public movies: Observable<Movie[]>;
  public language: string;
  public sort: number;

  constructor(
    private _moviesService: MoviesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  public getMovies() :void{
    this.movies = this._moviesService.getMovies();
  }
  public getTVShows():void {
    this.movies = this._moviesService.getTvShows();
  }

  public onSelect(movie: Movie) :void{
    this.router.navigate(['./../movie', movie.id]);
  }

 public handleChange(e) :void{
    let index = e.index;
    if (index == 0) {
      this.getMovies();
    } else if (index == 1) {
      this.getTVShows();
    } else {
      this.getMovies();
    }
  }
}
