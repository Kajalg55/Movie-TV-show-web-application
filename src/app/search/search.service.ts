import { Injectable }               from '@angular/core';
import { Http, }           from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class SearchService {
  private searchUrl = 'https://api.themoviedb.org/3/search/movie';
  private apiKey = '68b4fe2a513155a58dd0af4adacb281b';
  private language;

  constructor (private http: Http) {
  }

  searchMovies(query: string, page: number) {
    let searchUrl = `${this.searchUrl}?api_key=${this.apiKey}&language=${this.language}&query=${query}&page=${page}`;

    return this.http.get(searchUrl).pipe(map((res) => { return res.json() }))
  }

  
}
