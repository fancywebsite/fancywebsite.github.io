import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from '../cookie.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  @Input() public currentLang = '';

  constructor(private translate: TranslateService, private cookie: CookieService) { }

  changeUsedLang(lang: string) {
    this.translate.use(lang);
    this.translate.currentLang = lang;
    this.currentLang = lang;

    if (this.cookie.getCookie('cookieconsent_status') === 'dismiss') {
      this.cookie.setCookie({
        name: 'language',
        value: lang,
        session: true
      })
    }
  }

}
