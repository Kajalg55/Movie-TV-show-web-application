import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ActorService } from './actor.service';


@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  public language: string;
  public actorDetails: any;
  public movieList: any;
  private _movieId: number;


  constructor(
    private _ActorServiceService: ActorService,
    private route: ActivatedRoute,
    private location: Location,
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this._movieId = params['id'];
        if (this._movieId) {
          this.getActorDetails(this._movieId);
          this.getMovie(this._movieId);
        };
      });
  }

  public getActorDetails(id: number): void {
    this._ActorServiceService.getActorDetails(id).subscribe((result) => {
      this.actorDetails = result;
    });
  }

  public getMovie(id: number): void {
    this._ActorServiceService.getMovie(id).subscribe((result) => {
      this.movieList = result.cast;
    });
  }

  public back(): void {
    this.location.back();
  }

}
