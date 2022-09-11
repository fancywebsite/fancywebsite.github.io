import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html'
})
export class FeatureComponent {
  @Input() feature = '';
  @Input() icon = '';
  @Input() delay = '';
  animation = false;

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
