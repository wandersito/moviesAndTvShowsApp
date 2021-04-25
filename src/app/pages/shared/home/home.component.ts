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
  mediaData:Result[] = [];

  constructor( private mediaService: MediaService ) { }

  ngOnInit(): void {
    
    this.mediaService.getTrending( TimeWindow.Day )
    .pipe( 
      switchMap( day => {
        this.mediaService.reset();
        this.carouselData = day 
        return this.mediaService.getTrending( TimeWindow.Week );
      })
    ).subscribe( week => {
      this.mediaData = week;
    });
  }

  getTrending(){
    this.mediaService.getTrending( TimeWindow.Week )
        .subscribe( media => {
          this.mediaData.push( ...media );
        });
  }

}
