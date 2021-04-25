import { Component, Input, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Buy } from '../../interfaces/ProvidersResponse.interface';

@Component({
  selector: 'app-content-dialog',
  templateUrl: './content-dialog.component.html',
  styleUrls: ['./content-dialog.component.css']
})
export class ContentDialogComponent implements OnInit {

  providers: Buy[] = [];

  constructor( private config: DynamicDialogConfig ) { }

  ngOnInit(): void {
    console.log( this.config )
    this.providers = this.config.data;
  }

}
