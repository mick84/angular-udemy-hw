import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string | Array<any> | number): typeof value {
    switch (typeof value) {
      case 'number':
        return +`${value}`.split('').reverse().join('');
      case 'string':
        return `${value}`.split('').reverse().join('');
      default:
        return value.reverse();
    }
  }
}
