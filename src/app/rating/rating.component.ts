import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RatingService } from './rating.service';
import { Rating } from './rating';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent implements OnInit {
 public movies: Observable<Rating[]>;
 public language: string;

  constructor(
    private ratingService: RatingService
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  public dynamicSort(property) {
    let sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }

  public getMovies(): void {
    this.movies = this.ratingService.getMovies();
  }
  public getTVShows(): void {
    this.movies = this.ratingService.getTvShows();
  }

  public handleChange(e): void {
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
