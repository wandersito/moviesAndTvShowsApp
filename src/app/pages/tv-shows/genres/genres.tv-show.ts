import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaType, Result } from 'src/app/core/interfaces/MediaResponse.interface';
import { MediaService } from 'src/app/core/services/media.service';

@Component({
  selector: 'app-genres-tv',
  templateUrl: './genres.tv-show.html',
  styleUrls: ['./genres.tv-show.css']
})
export class GenresTvShow implements OnInit {

  header: string = '';
  tvShows:Result[] = [];

  constructor(  private mediaService:MediaService,
                private activatedRoute:ActivatedRoute ) {  }
 
  ngOnInit(): void {
    const { name } = this.activatedRoute.snapshot.params;
    this.header = `Tv Shows: ${name}`;
    this.getTvShows()
  }

  getTvShows(){
    const { genre } = this.activatedRoute.snapshot.params;
    this.mediaService.getMediaByGenre( genre, MediaType.Tv )
        .subscribe( tvShows => {
          this.tvShows.push(...tvShows);
        });
  }

  ngOnDestroy(): void {
    this.mediaService.reset();
  }

}
