import { Pipe, PipeTransform } from '@angular/core';
import { MediaType } from 'src/app/core/interfaces/MediaResponse.interface';

@Pipe({
  name: 'route'
})
export class RoutePipe implements PipeTransform {

  transform( mediaType: MediaType ): string {
    if( mediaType === MediaType.Movie ){
      return '/browse/movie';
    }
    return '/browse/tv-show';
  }

}
