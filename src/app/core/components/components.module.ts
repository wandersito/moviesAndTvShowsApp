import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PrimeNgModule } from '../../prime-ng/prime-ng.module';

import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ImageRoutePipe } from '../../shared/pipes/image-route.pipe';
import { RoutePipe } from '../../shared/pipes/route.pipe';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { NamePipe } from '../../shared/pipes/name.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    SearchComponent,
    CardComponent,
    CarouselComponent,
    DetailComponent,
    ListComponent,
    ImageRoutePipe,
    RoutePipe,
    NamePipe,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    NavbarComponent,
    SearchComponent,
    CardComponent,
    CarouselComponent,
    DetailComponent,
    ListComponent,
  ]
})
export class ComponentsModule { }
