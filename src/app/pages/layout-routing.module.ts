import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './shared/home/home.component';
import { DetailMovie } from './movies/detail/detail.movie';
import { DetailTvShow } from './tv-shows/detail/detail.tv-show';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'movie/:id', component: DetailMovie },
      { path: 'tv-show/:id', component: DetailTvShow },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
