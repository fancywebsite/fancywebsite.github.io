import { Component, Input } from '@angular/core';
import { AnimationComponent } from 'src/app/animation.component';

@Component({
  selector: 'app-how-it-works-row',
  templateUrl: './how-it-works-row.component.html'
})
export class HowItWorksRowComponent extends AnimationComponent {
  @Input() imgSrc = '';
  @Input() subtitle = '';
  @Input() description = '';
  @Input() rowType = 'left' || 'right';
  @Input() rowClass = '';
}
