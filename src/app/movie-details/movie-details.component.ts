import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies/movies.service';
import { Movie } from '../movies/movie';
import { Location } from '@angular/common';
import { MovieDetailService } from './movie-details.service';
import { ToastrService } from 'ngx-toastr';

import { Credit } from '../movies/credits';

@Component({
  selector: 'app-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public selectedMovie: Movie;
  public errorMessage: string;
  public language: string;
  public formRating: any;
  public isRated: boolean = false;
  public rate: number;
  public selectedCredits: Credit;

  private _movieId: number;


  constructor(
    private _moviesService: MoviesService,
    private _moviedetailService: MovieDetailService,
    private route: ActivatedRoute,
    private location: Location,
    private toastr: ToastrService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this._movieId = params['id'];
        if (this._movieId) {
          this.getDetails(this._movieId);
          this.getCredits(this._movieId);
        };
      });
  }

  public getDetails(id: number): void {
    this._moviesService.getDetails(id)
      .subscribe(
        response => this.selectedMovie = response,
        error => this.errorMessage = <any>error);
    this._moviesService.getDetails(id).subscribe((result: Movie) => {
      this.selectedMovie = result;
      this.rate = this.selectedMovie.vote_average;
    });
  }

  public getCredits(id: number): void {
    this._moviesService.getCredits(id).subscribe((result) => {
      this.selectedCredits = result.cast;
    });
  }

  public addRating(rate): void {
    let rateValue = {
      "value": rate
    }
    if (rate) {
      this._moviedetailService.addRating(rateValue, this._movieId)
        .subscribe(error => this.errorMessage = <any>error);
      this.toastr.success('Rating Added successfully');
      this.router.navigate(['/home']);
    }

  }
  public back(): void {
    this.location.back();
  }


  public onRateChange(e): void {
    this.isRated = true;
    this.rate = e;
    this.addRating(this.rate);
  }

  public ratingReset(): void {
    this.isRated = false;
    this.rate = 0.5;
  }
}
