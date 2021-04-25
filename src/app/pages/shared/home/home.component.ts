import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Result, TimeWindow } from 'src/app/core/interfaces/MediaResponse.interface';
import { MediaService } from '../../../core/services/media.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carouselData:Result[] = [];
  cardData:Result[] = [];

  constructor( private mediaService: MediaService ) { }

  ngOnInit(): void {
    
    this.mediaService.getTrending( TimeWindow.Day )
    .pipe( 
      switchMap( day => {
          this.carouselData = day 
          return this.mediaService.getTrending( TimeWindow.Week );
      })
     ).subscribe( week => {
          this.cardData = week;
        });

  }

}
