import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageRoute'
})
export class ImageRoutePipe implements PipeTransform {

  transform(posterUrl: string): string {
    if( posterUrl ){
      return `https://image.tmdb.org/t/p/original${posterUrl}`;
    }
    return 'assets/no-image-available.jpeg';
  }

}
