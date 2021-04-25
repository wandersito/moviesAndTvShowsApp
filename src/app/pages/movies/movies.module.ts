import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMovie } from './list/list.movie';
import { DetailMovie } from './detail/detail.movie';
import { ComponentsModule } from '../../core/components/components.module';



@NgModule({
  declarations: [
  ListMovie,
  DetailMovie
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
