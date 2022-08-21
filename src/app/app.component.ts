import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import defaultLanguage from '../assets/i18n/sk.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.setTranslation('sk', defaultLanguage);
    translate.setDefaultLang('sk');
    translate.currentLang = 'sk';
  }

}
