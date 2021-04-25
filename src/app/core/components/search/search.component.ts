import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OriginalLanguage, Result } from '../../interfaces/MediaResponse.interface';
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

  searchBy: any = {
    id: 0,
    name: '',
    value: ''
  }

  constructor(  private mediaService: MediaService,
                private router: Router) { }

  ngOnInit(): void {
  }

  searchMedia() {

    this.searchBy.name =  `Search: '${this.searchValue}'` ;
    this.searchBy.value =  this.searchValue;

    this.mediaService.reset();

    this.mediaService.getMediaBySearch( this.searchValue )
          .subscribe( mediaItems => {
            this.filteredMedia = mediaItems.splice(0,5);
            this.filteredMedia.unshift( this.searchBy )
          });
  }

  findAll( value: Result){

    if( value.id === 0 ){
      this.router.navigate(['/browse/search', this.searchBy.value ]);
      this.searchValue = '';
      return;
    }

    this.router.navigate(['/browse', value.media_type, value.id]);
    this.searchValue = '';
  }


}
