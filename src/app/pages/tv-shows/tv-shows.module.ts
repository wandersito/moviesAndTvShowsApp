import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailTvShow } from './detail/detail.tv-show';
import { ListTvShow } from './list/list.tv-show';
import { ComponentsModule } from '../../core/components/components.module';
import { GenresTvShow } from './genres/genres.tv-show';



@NgModule({
  declarations: [
    DetailTvShow,
    ListTvShow,
    GenresTvShow
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    DetailTvShow,
    ListTvShow
  ]
})
export class TvShowsModule { }
