import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Result } from 'src/app/core/interfaces/MediaResponse.interface';
import { MediaService } from '../../../core/services/media.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results!: Result[];
  search!: string;

  constructor(  private activatedRoute:ActivatedRoute,
                private mediaService:MediaService) { }

  ngOnInit(): void {

    this.getResults();
    
  }

  getResults(){
    this.mediaService.reset();
    
    this.activatedRoute.params
      .pipe(
        switchMap( ({value}) => {
          this.search = value;
          return this.mediaService.getMediaBySearch( value )
        })
      )
    .subscribe( results =>  {
    this.results = results;
    })
  }
}
