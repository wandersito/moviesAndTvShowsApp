import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';


@NgModule({
  exports:[
    MenubarModule,
    ButtonModule,
    InputTextModule,
    AutoCompleteModule,
    CarouselModule,
    CardModule,
    RatingModule,
  ]
})
export class PrimeNgModule { }
