import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {

    scroll() {
        const el = document.getElementById('contact');
        if (el) {
            el.scrollIntoView({behavior: 'smooth'});
        }
    }
}
