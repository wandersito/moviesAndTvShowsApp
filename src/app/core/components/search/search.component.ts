import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from '../../interfaces/MediaResponse.interface';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  suggestedMedia:Result[] = [];

  searchValue!: string;

  filteredMedia: Result[] = [];

  constructor(  private mediaService: MediaService,
                private router: Router) { }

  ngOnInit(): void {
  }

  searchMedia() {

    this.mediaService.reset();

    this.mediaService.getMediaBySearch( this.searchValue )
          .subscribe( mediaItems => {
            this.filteredMedia = mediaItems.splice(0,5);
          });
  }

  findAll( value: Result){
    console.log( value.id );
    this.router.navigate(['/browse', value.media_type, value.id]);
    this.searchValue = '';
  }


}
