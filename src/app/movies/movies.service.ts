import { Injectable }               from '@angular/core';
import { Http, Response }           from '@angular/http';
import { Observable }               from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from './movie';

@Injectable()
export class MoviesService {
  private  url = 'https://api.themoviedb.org/3/movie/';
  private urlTv = 'https://api.themoviedb.org/3/tv/';
  private searchUrl = 'https://api.themoviedb.org/3/search/movie';
  private apiKey = '68b4fe2a513155a58dd0af4adacb281b';
  private language;

  constructor (private http: Http) {
    if (localStorage.getItem('lang') == 'en') this.language = 'en';
    else this.language = 'en';
  }

 public getMovies(): Observable<Movie[]> {
    let moviesUrl = `${this.url}popular?api_key=${this.apiKey}&language=${this.language}`;

    return this.http.get(moviesUrl).pipe(map(this.extractData));
  }
  public getTvShows(): Observable<Movie[]> {
    let moviesUrl = `${this.urlTv}popular?api_key=${this.apiKey}&language=${this.language}`;

    return this.http.get(moviesUrl).pipe(map(this.extractData));
  }

  public searchMovies(query: string) {
    let searchUrl = `${this.searchUrl}?api_key=${this.apiKey}&language=${this.language}&query=${query}`;

    return this.http.get(searchUrl).pipe(map((res) => { return res.json() }))
  }

  public getDetails(id : number) {
    let detailsUrl = `${this.url}${id}?api_key=${this.apiKey}&language=${this.language}`;

    return this.http.get(detailsUrl).pipe(map((res) => { return res.json() }))
  }
  

  public getCredits(id:number){
    let detailsUrl = `${this.url}${id}/credits?api_key=${this.apiKey}&language=${this.language}`;

    return this.http.get(detailsUrl).pipe(map((res) => { return res.json() }))
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.results || { };
  }
  
}
