import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { FilterMovieAccessGuard } from './guards/filter-movie-access.guard';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MyListComponent } from './my-list/my-list.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'my-list', component: MyListComponent },
  { path: 'tv-shows', component: TvShowsComponent },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
    canActivate: [FilterMovieAccessGuard],
  },
  { path: '**', component: NotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
