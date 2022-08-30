import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatIconRegistry } from "@angular/material/icon";
import defaultLanguage from '../assets/i18n/sk.json';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public defaultLang = 'sk';
  public cc: any;

  constructor(private translate: TranslateService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    translate.setTranslation(this.defaultLang, defaultLanguage);
    translate.setDefaultLang(this.defaultLang);
    translate.currentLang = this.defaultLang;
    this.matIconRegistry.addSvgIcon(
      `fancyweb_logo`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/logo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `sk_flag`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/sk.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `en_flag`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/gb.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `hu_flag`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/hu.svg")
    );
  }

  ngOnInit(): void {
    this.cc = window as any;
    let content = {
      message: '',
      dismiss: '',
      link: '',
      href: '/'
    }
    this.translate.get('cookieMessage').subscribe((event) => content.message = event).unsubscribe();
    this.translate.get('cookieDismiss').subscribe((event) => content.dismiss = event).unsubscribe();
    this.translate.get('cookieLinkText').subscribe((event) => content.link = event).unsubscribe();

    this.cc.cookieconsent.initialise({
      palette: {
        popup: {
          background: "#164969"
        },
        button: {
          background: "#ffe000",
          text: "#164969"
        }
      },
      theme: "classic",
      content
    });
  }

}
