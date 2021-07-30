import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyMxn'
})
export class CurrencyMxnPipe implements PipeTransform {

  transform(value: string): string {
    return `${ value } MXN`;
  }

}
