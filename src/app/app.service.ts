import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MovieElement} from "./app.component";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class DataLayer {
  URL: string = "https://snickdx.me:3002/movies";
  newID: string;
  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.URL);
  }

  postMovie (newMovie: MovieElement): Observable<MovieElement> {
    this.newID = newMovie.id.toString();
    return this.http.post<MovieElement>((this.URL), newMovie);
  }
}
