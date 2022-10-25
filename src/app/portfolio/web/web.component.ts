import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html'
})
export class WebComponent {
    @Input() id = '';
    @Input() link = '';
}
