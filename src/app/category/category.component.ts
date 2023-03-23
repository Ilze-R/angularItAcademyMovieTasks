import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  categories: any = [];
  movies: any = [];
  category: any = {};

  constructor(
    private categoriesService: CategoriesService,
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categories = this.categoriesService.getCategories();
    this.activatedRoute.paramMap.subscribe((data) => {
      this.category = this.categoriesService.getCategory(data.get('id') || '');
      this.movies = this.moviesService.getMoviesByCategory(
        data.get('id') || ''
      );
    });
  }
}
