import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipePipe implements PipeTransform {
  transform(value: string, limit?: number, trail?: string): string {
    const l = limit || 20;
    const t = trail || '...';
    return value.length > l ? value.substring(0, l) + t : value;
  }
}
