import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Result, TimeWindow, TrendingResponse } from '../interfaces/MediaResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private baseUrl: string = environment.baseUrl;
  private apiKey:string =  environment.apiKey;
  private page:number = 1;
  private language: string = 'en-US'
  private _loading: boolean = false;
  private region: string = 'US';

  get loading(){
    return this._loading;
  }

  get params(){
    return {
      api_key: this.apiKey,
      language: this.language,
      page: this.page.toString()
    }
  }

  constructor( private http: HttpClient ) { }

  getTrending( timeWindow: TimeWindow ):Observable<Result[]>{

    if( this._loading ){ 
      return of([]);
    }
    
    this._loading = true;
    const url = `${this.baseUrl}/trending/all/${ timeWindow }`;

    return this.http.get<TrendingResponse>(url, {params: this.params })
      .pipe( 
        map( results => results.results ),
        tap( () => {
          this.page += 1;
          this._loading = false;
        })
      );
  }

}
