import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from '../core/components/components.module';
import { HomeComponent } from './shared/home/home.component';
import { TvShowsModule } from './tv-shows/tv-shows.module';
import { MoviesModule } from './movies/movies.module';


@NgModule({
  declarations: [
    LayoutComponent, 
    HomeComponent, 
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ComponentsModule,
    TvShowsModule,
    MoviesModule,
  ]
})
export class LayoutModule { }
