import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html'
})
export class BioComponent {
    @Input() name = '';
    @Input() bio = '';
    @Input() picture = '';
}
