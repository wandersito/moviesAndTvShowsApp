import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Result } from '../../interfaces/MediaResponse.interface';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() title: string = '';
  @Input() results: Result[] = [];

  @Output() loadData: EventEmitter<void> = new EventEmitter();

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1500;
    const max = ( document.documentElement.scrollHeight || document.body.scrollHeight );

    if( pos > max ){

      if( this.mediaService.loading ){ return; }
      this.loadData.emit();
   
    }

  }

  constructor( private mediaService:MediaService ) { }

  ngOnInit(): void {
  }

}
