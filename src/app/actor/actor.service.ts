import { Injectable }               from '@angular/core';
import { Http, Response }           from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ActorService {
  private  url = 'https://api.themoviedb.org/3/person/';
  private urlTv = 'https://api.themoviedb.org/3/tv/';
  private searchUrl = 'https://api.themoviedb.org/3/search/movie';
  private apiKey = '68b4fe2a513155a58dd0af4adacb281b';
  private language;

  constructor (private http: Http) {
    if (localStorage.getItem('lang') == 'en') this.language = 'en';
    else this.language = 'en';
  }

  public getActorDetails(id : number) {
    let detailsUrl = `${this.url}${id}?api_key=${this.apiKey}&language=${this.language}`;

    return this.http.get(detailsUrl).pipe(map((res) => { return res.json() }))
  }
  
  public getMovie(id : number) {
    let detailsUrl = `${this.url}${id}/movie_credits?api_key=${this.apiKey}&language=${this.language}`;

    return this.http.get(detailsUrl).pipe(map((res) => { return res.json() }))
  }
}
