import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-works-row',
  templateUrl: './how-it-works-row.component.html'
})
export class HowItWorksRowComponent {
  animation: boolean = false;
  @Input() delay = '';
  @Input() imgSrc = '';
  @Input() subtitle = '';
  @Input() description = '';
  @Input() rowType = 'left' || 'right';
  @Input() rowClass = '';

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {

      const el = document.getElementById(this.delay);
      if (el) {
        const rect = el.getBoundingClientRect();
        const topShown = rect.top >= 0;
        const bottomShown = rect.bottom <= window.innerHeight;

        const temp = topShown && bottomShown;
        if (!this.animation && temp) {
          this.animation = temp;
        }

        if (window.scrollY === 0 && this.animation) {
          this.animation = false;
        }

      }

  }

}
