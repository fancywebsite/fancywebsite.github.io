import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent {
    @Input() id = '';
}
