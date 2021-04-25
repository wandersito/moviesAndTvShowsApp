import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Cast } from '../../interfaces/CreditsResponse.interface';
import { Keyword } from '../../interfaces/KeywordsResponse.interface';
import { MediaType, Result } from '../../interfaces/MediaResponse.interface';
import { Buy } from '../../interfaces/ProvidersResponse.interface';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() mediaType!: MediaType;
  @Input() id!: string;

  media!:Result;
  cast: Cast[] = [];
  keywords!: Keyword[];

  rent:Buy[] = [];
  subscription:Buy[] = [];
  buy:Buy[] = [];

  constructor(  private mediaService: MediaService,
                private location: Location) { }

  ngOnInit(): void {
    combineLatest( [
      this.mediaService.getMediaById( this.id, this.mediaType),
      this.mediaService.getCastByMediaId( this.id, this.mediaType ),
      this.mediaService.getProvidersByMedia( this.id, this.mediaType ),
      this.mediaService.getKeywordsByMedia( this.id, this.mediaType )
    ]).subscribe( ( [media, 
      cast, provider, keywords
    ] ) => {

      this.media = media!;
      this.cast = cast.filter( actor => actor.profile_path != null );
      this.keywords =  keywords;

      this.rent = provider.rent;
      this.buy = provider.buy;
      this.subscription = provider.flatrate;
    });

  }

  onBack(){
    this.location.back();
  }

  ngOnDestroy(): void {
    this.mediaService.reset();
  }

}
