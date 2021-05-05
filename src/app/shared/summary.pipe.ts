import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit: number = 30): any {
    if (!value) { return null; }

    const actualLimit = (limit) ? limit : 30;
    return value.substring(0, actualLimit) + '...';
  }
}
