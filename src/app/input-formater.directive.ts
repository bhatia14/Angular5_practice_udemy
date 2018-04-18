import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormater]'
})
export class InputFormaterDirective {
  @Input('appInputFormater') input;

  constructor(private el:ElementRef) { }

  @HostListener('blur') onblur(){
    let value:String = this.el.nativeElement.value;
    if(this.input == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase(); 
    else
      this.el.nativeElement.value = value.toUpperCase();
  }

}
