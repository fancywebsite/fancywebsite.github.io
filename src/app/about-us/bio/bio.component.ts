import { Component, Input } from '@angular/core';
import { contactInfo } from 'src/constants';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html'
})
export class BioComponent {
    @Input() person = '';

    getEmail(): string {
      return `mailto:${contactInfo[this.person].email}`;
    }

    getLinkedin(): string {
      return contactInfo[this.person].linkedin;
    }
}
