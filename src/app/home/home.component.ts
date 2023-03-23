import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: any = [];
  categories: any = [];

  constructor(
    private movieService: MoviesService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    this.categories = this.categoriesService.getCategories();
  }
}
