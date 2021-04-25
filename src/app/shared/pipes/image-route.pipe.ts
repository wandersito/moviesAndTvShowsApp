import { Pipe, PipeTransform } from '@angular/core';
import { SizeImg } from '../../core/interfaces/SizeImage.interface';

@Pipe({
  name: 'imageRoute'
})
export class ImageRoutePipe implements PipeTransform {

  transform(posterUrl: string, size: SizeImg = SizeImg.default): string {
    if( posterUrl ){
      return `https://image.tmdb.org/t/p/${size}${posterUrl}`;
    }
    return 'assets/no-image-available.jpeg';
  }

}
