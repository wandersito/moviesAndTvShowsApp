import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './shared/home/home.component';
import { DetailMovie } from './movies/detail/detail.movie';
import { DetailTvShow } from './tv-shows/detail/detail.tv-show';
import { ListMovie } from './movies/list/list.movie';
import { ListTvShow } from './tv-shows/list/list.tv-show';
import { GenresMovie } from './movies/genres/genres.movie';
import { GenresTvShow } from './tv-shows/genres/genres.tv-show';
import { SearchComponent } from './shared/search/search.component';
import { AboutComponent } from './shared/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'search/:value', component: SearchComponent },

      { path: 'movie/:id', component: DetailMovie },
      { path: 'movies', component: ListMovie },
      { path: 'movies/genres/:genre/:name', component: GenresMovie },

      { path: 'tv-show/:id', component: DetailTvShow },
      { path: 'tv-shows', component: ListTvShow },
      { path: 'tv-shows/genres/:genre/:name', component: GenresTvShow },

      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
