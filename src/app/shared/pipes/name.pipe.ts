import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../../core/interfaces/MediaResponse.interface';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(item: Result): string {
    if( item.title ){
      return item.title;
    }else{
      return item.name || '';
    }
    
  }

}
