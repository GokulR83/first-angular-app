import { Directive, input, signal, effect, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appHighlightCompleteTodo]'
})
export class HighlightCompleteTodoDirective {
    isCompleted = input(false);
    el = inject(ElementRef);
  constructor() { }
  StyleEffect = effect(()=>{
    if(this.isCompleted()){
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.backgroundColor = 'green';
    }
    else{
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backgroundColor = 'white';
    }
  })
}
