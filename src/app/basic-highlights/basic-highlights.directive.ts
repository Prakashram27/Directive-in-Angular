import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHighLights]',
})
export class BasicHightLightDirective implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    // this.elementRef.nativeElement.style.backgroundColor = '#3E3053'; // This was elementRef method

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }
}
