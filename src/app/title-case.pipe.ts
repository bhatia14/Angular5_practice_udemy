import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {
    if(!value) return null;
    let a:string;
    let prop= ["to", "of", "the"];
    let split = value.split(" ");
    for(let i=0;i<split.length;i++){
      split[i]=split[i].toLowerCase();
      if(i!=0 || prop.includes(split[i])){
        split[i] = split[i];
      }
      else {
        split[i] = split[i].substring(0,1).toUpperCase()+split[i].substring(1);
      }
    }

    a = split.join(" ");
    return a;
  }

}
