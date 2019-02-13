import { Directive,ElementRef,HostListener  } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(Element:ElementRef) {
console.log(Element); 
Element.nativeElement.innerText="Text is changed by changeText Directive. ";
 }
@HostListener('keydown', ['$event']) onKeyDown(event:KeyboardEvent) {
    if (event.keyCode>32 && event.keyCode<128)
   {
      event.target['value']+=event.key.toUpperCase();
      event.preventDefault(); //stop propagation
      //must create a "input" event, if not, there are no change in your value
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent("input", false, true);
      event.target.dispatchEvent(evt);
    }

  }
}
