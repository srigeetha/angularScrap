import { Pipe,PipeTransform } from '@angular/core';

@Pipe({name: 'custompipe'})
export class PipeService implements PipeTransform {
  transform(value: String): String {
    let valu:any = value.split(" ");
    console.log("Pipe result"+valu[1]);
    return valu[0];
  }
}