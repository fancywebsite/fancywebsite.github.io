import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent {
    @Input() id = '';

    showMore = false;

    isThereMore = false;

    constructor(protected translate: TranslateService){}

    getText(){
      const text = String(this.translate.instant('reviews.' + this.id + '.text'));
      const index = text.indexOf('$');
      this.isThereMore = index != -1;
      return this.showMore || !this.isThereMore ? text.replace('$', '') : text.substring(0, index);
    }
}
