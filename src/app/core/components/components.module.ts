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


@NgModule({
  declarations: [
    NavbarComponent,
    SearchComponent,
    CardComponent,
    CarouselComponent,
    ImageRoutePipe
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
  ]
})
export class ComponentsModule { }
