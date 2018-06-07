import { Injectable } from '@angular/core';
import {MovieElement} from './app.component';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class MovieService {

    constructor(private http: HttpClient) { }

    getMovies() {
        return this.http.get(environment.backend);
    }

    postMovie (newMovie:any): Observable<MovieElement> {

        return this.http.post<MovieElement>((environment.backend), newMovie);
    }
}
