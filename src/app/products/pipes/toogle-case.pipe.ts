import { Pipe, PipeTransform } from '@angular/core';

// fernando | toggleCase = 'FERNANDO'
// FERNANDO | toggleCase = 'fernando'

@Pipe({
  name: 'toogleCase'
})
export class ToogleCasePipe implements PipeTransform {

  transform(value: string, toUpper: boolean = false): string {

    return (toUpper) ? value.toUpperCase() : value.toLowerCase();
  }

}
