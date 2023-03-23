import { Injectable, Input } from '@angular/core';
import { moviesList } from '../shared/data';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor() {}

  getMovies() {
    return moviesList.movies;
  }

  getMovie(id: string) {
    return moviesList.movies.find((movie) => movie.id.toString() == id);
  }

  getMoviesByCategory(id: string) {
    return moviesList.movies.filter(
      (movie) => movie.categoryId.toString() == id
    );
  }
}
