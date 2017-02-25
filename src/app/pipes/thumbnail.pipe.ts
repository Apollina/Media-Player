import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  transform(value: string, size?: string): any {
    value = value.substring(0,value.lastIndexOf('.'));
    if (size === 'large') {
       return value + '-tn640.png';
    } else if (size === 'medium') {
      return value + '-tn320.png';
    } else {
      return value + '-tn160.png';
    }
  }

}
