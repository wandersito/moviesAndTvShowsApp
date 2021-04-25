import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from '../core/components/components.module';
import { HomeComponent } from './shared/home/home.component';


@NgModule({
  declarations: [LayoutComponent, HomeComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ComponentsModule,
  ]
})
export class LayoutModule { }
