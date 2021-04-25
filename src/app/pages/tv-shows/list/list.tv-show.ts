import { Component, OnInit } from '@angular/core';
import { MediaType, Result } from 'src/app/core/interfaces/MediaResponse.interface';
import { MediaService } from '../../../core/services/media.service';

@Component({
  selector: 'app-list-tv',
  templateUrl: './list.tv-show.html',
  styleUrls: ['./list.tv-show.css']
})
export class ListTvShow implements OnInit {

  tvShows:Result[] = [];
  header: string = 'Tv Shows';

  constructor( private mediaService: MediaService ) { }

  ngOnInit(): void {
    this.getTvShows();
  }

  ngOnDestroy(): void {
    this.mediaService.reset();
  }

  getTvShows(){
      this.mediaService.getAllByMedia( MediaType.Tv )
        .subscribe( tvShows => {
          this.tvShows.push(...tvShows);
        })

  }

}
