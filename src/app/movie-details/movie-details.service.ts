import { Injectable }               from '@angular/core';
import {  Response }           from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MovieDetailService {
  private searchUrl = 'https://api.themoviedb.org/3/';
  private apiKey = 'b3a8656e62881a18ea8a8de62aa617a8';
  private seessionId = '0260ecde5dd1299e96a4208ce79ff19853cf0fff';
  private language = 'en';
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2E4NjU2ZTYyODgxYTE4ZWE4YThkZTYyYWE2MTdhOCIsInN1YiI6IjVmN2FkNzRmZGExMGYwMDAzNDdhODRkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cs28YzYRTgE4wsQwGXH-4X19VNlUqwTyN6voqB-W0RA'
    })
  }

  constructor (private http: HttpClient) {

  }

 public searchMovies(query: string, page: number) {
    let searchUrl = `${this.searchUrl}?api_key=${this.apiKey}&language=${this.language}&query=${query}&page=${page}`;

    return this.http.get(searchUrl).pipe(map((res:Response) => { return res.json() }))
  }

  public addRating(model,movieId) {
    let searchUrl = `${this.searchUrl}movie/${movieId}/rating?api_key=${this.apiKey}&language=${this.language}&session_id=${this.seessionId}`;
    return this.http.post(searchUrl,model, {headers: this.httpOptions.headers}).pipe(map((res:Response) => { return res}))
  }

}
