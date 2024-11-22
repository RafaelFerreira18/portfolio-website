import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective {
  @Input('appScrollReveal') animationClass = 'reveal'; // Classe de animação

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.opacity = '0'; // Esconde o elemento inicialmente
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight - 100) {
      this.el.nativeElement.style.opacity = '1';
      this.el.nativeElement.classList.add(this.animationClass);
    }
  }
}
