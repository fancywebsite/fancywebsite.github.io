import { Component, Input } from '@angular/core';
import { AnimationComponent } from 'src/app/animation.component';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html'
})
export class FeatureComponent extends AnimationComponent {
  @Input() feature = '';
  @Input() icon = '';
}
