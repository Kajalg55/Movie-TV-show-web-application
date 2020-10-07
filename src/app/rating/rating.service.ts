import { Injectable }               from '@angular/core';
import { Http, Response }           from '@angular/http';
import { Observable }               from 'rxjs';
import { map } from 'rxjs/operators';
import { Rating } from './rating';

@Injectable()
export class RatingService {
  private url = 'https://api.themoviedb.org/3/';
  private sessionId = '0260ecde5dd1299e96a4208ce79ff19853cf0fff';
  private searchUrl = 'https://api.themoviedb.org/3/search/movie';
  private apiKey = 'b3a8656e62881a18ea8a8de62aa617a8';
  private accountId = 9713499;
  private language;

  constructor (private http: Http) {
    if (localStorage.getItem('lang') == 'en') this.language = 'en';
    else this.language = 'en';
  }
  getMovies(): Observable<Rating[]> {
    let moviesUrl = `${this.url}account/${this.accountId}/rated/movies?api_key=${this.apiKey}&language=${this.language}&session_id=${this.sessionId}`;

    return this.http.get(moviesUrl).pipe(map(this.extractData));
  }

  getTvShows(): Observable<Rating[]> {
    let moviesUrl = `${this.url}account/${this.accountId}/rated/tv?api_key=${this.apiKey}&language=${this.language}&session_id=${this.sessionId}`;

    return this.http.get(moviesUrl).pipe(map(this.extractData));
  }

  searchMovies(query: string) {
    let searchUrl = `${this.searchUrl}?api_key=${this.apiKey}&language=${this.language}&query=${query}`;

    return this.http.get(searchUrl).pipe(map((res) => { return res.json() }))
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.results || { };
  }

}
