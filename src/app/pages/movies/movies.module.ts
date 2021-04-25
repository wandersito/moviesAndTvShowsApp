import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMovie } from './list/list.movie';
import { DetailMovie } from './detail/detail.movie';
import { ComponentsModule } from '../../core/components/components.module';
import { GenresMovie } from './genres/genres.movie';



@NgModule({
  declarations: [
  ListMovie,
  DetailMovie,
  GenresMovie
],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    ListMovie,
    DetailMovie
  ]
})
export class MoviesModule { }
