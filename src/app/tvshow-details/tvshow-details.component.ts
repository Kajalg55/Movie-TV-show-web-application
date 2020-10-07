import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies/movies.service';
import { TvShow } from '../movies/tvshow';
import { Location } from '@angular/common';
import { TvShowDetailService } from './tvshow-details.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  templateUrl: './tvshow-details.component.html',
  styleUrls: ['./tvshow-details.component.css']
})
export class TvShowDetailsComponent implements OnInit {
  public selectedTvShow: TvShow;
  public errorMessage: string;
  public language: string;
  public formRating: any;
  public isRated: boolean = false;
  public rate:number;
  private _movieId: number;

  constructor(
    private _moviesService: MoviesService,
    private _tvShowdetailService: TvShowDetailService,
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
        if (this._movieId) this.getDetails(this._movieId);
      });
  }

public getDetails(id: number): void {
        this._tvShowdetailService.getDetails(id).subscribe((result:TvShow) => {
          this.selectedTvShow = result;
          this.rate =this.selectedTvShow.vote_average;
        });
  }

  public addRating(rate): void {
    let rateValue = {
      "value": rate
    }
    if (rate) {
      this._tvShowdetailService.addRating(rateValue, this._movieId)
        .subscribe(error => this.errorMessage = <any>error);
      this.toastr.success('Rating Added successfully');
      this.router.navigate(['/home']);
    }

  }
  public back():void {
    this.location.back();
  }


  public onRateChange(e):void {
    console.log(e)
    this.isRated = true;
    this.rate = e;
    this.addRating(this.rate);
  }

  public ratingReset() :void{
    this.isRated = false;
    this.rate = 0.5;
  }
}
