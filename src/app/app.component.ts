import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatIconRegistry } from "@angular/material/icon";
import defaultLanguage from '../assets/i18n/sk.json';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { CookieService } from './cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public currentLang = 'sk';

  constructor(private translate: TranslateService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private cookie: CookieService,
    private metaTagService: Meta,
    private titleService: Title) {
    // Translate initialization
    translate.setTranslation(this.currentLang, defaultLanguage);
    translate.setDefaultLang(this.currentLang);
    translate.currentLang = this.currentLang;
    // Icons initialization
    this.addIconToRegistry('fancyweb_logo', 'assets/icons/logo.svg');
    this.addIconToRegistry('success', 'assets/icons/success.svg');
    this.addIconToRegistry('sk_flag', 'assets/icons/sk.svg');
    this.addIconToRegistry('en_flag', 'assets/icons/gb.svg');
    this.addIconToRegistry('hu_flag', 'assets/icons/hu.svg');
  }

  ngOnInit(): void {
    this.initCookies();
    this.addMetaTags();
  }

  initCookies(): void {

    if (this.cookie.getCookie('cookieconsent_status') === 'allow') {
      if (!this.cookie.getCookie('language')) {
        this.cookie.setCookie({
          name: 'language',
          value: this.currentLang,
          session: true
        })
      }
      let cookieLanguage = this.cookie.getCookie('language')
      this.translate.use(cookieLanguage);
      this.currentLang = cookieLanguage;
    }

    this.cookie.initCookieConsent();
  }

  addIconToRegistry(iconName: string, iconPath: string) {
    this.matIconRegistry.addSvgIcon(
      iconName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(iconPath)
    );
  }

  addMetaTags(): void {
    this.titleService.setTitle('Tvorba webov??ch str??nok na mieru - FancyWeb');
    this.metaTagService.addTags([
      {name: 'description', content: 'Tvorba webov??ch str??nok na mieru s responz??vnym dizajnom.'},
      {name: 'keywords', content: 'website design, web development, web na mieru, tvorba web str??nok, tvorba web, web, web str??nky, tvorba web stranok'},
      {name: 'robots', content: 'index, follow'},
      {name: 'author', content: 'Krisztian T??th, T??mea Nagy'},
      {charset: 'UTF-8'},
    ])
  }
}
