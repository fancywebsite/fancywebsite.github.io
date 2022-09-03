import { Component } from '@angular/core';

@Component({
  selector: 'app-build-your-web',
  templateUrl: './build-your-web.component.html'
})
export class BuildYourWebComponent {

    scroll() {
        const el = document.getElementById('contact');
        if (el) {
            el.scrollIntoView({behavior: 'smooth'});
        }
    }
}
