import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { MyListComponent } from './my-list/my-list.component';
import { MoviesService } from './services/movies.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    NotFoundComponentComponent,
    TvShowsComponent,
    MyListComponent,
    MovieDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
