import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ContentDialogComponent } from '../content-dialog/content-dialog.component';
import { Provider, Buy } from '../../interfaces/ProvidersResponse.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  providers: [DialogService]
})
export class DialogComponent implements OnInit {

  @Input() label: string = 'No Content';
  @Input() provider:Buy[] = [];
  @Input() style: string = 'p-button-secondary';

  constructor( private dialogService: DialogService ) { }

  ngOnInit(): void {
    console.log( this.provider )
  }

  show() {
    const ref = this.dialogService.open( ContentDialogComponent, {
        data: this.provider,
        header: this.label,
        width: '70%'
    });
  }

}
