import { Pipe, PipeTransform } from '@angular/core';
import { Server } from './app.component';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: Server[], property: keyof Server) {
    switch (property) {
      case 'started':
        return value.sort((a, b) => a.started.getTime() - b.started.getTime());
      default:
        return value.sort((a, b) => (a[property] < b[property] ? -1 : 1));
    }
  }
}
