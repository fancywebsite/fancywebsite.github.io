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

  constructor(private translate: TranslateService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    translate.setTranslation('sk', defaultLanguage);
    translate.setDefaultLang('sk');
    translate.currentLang = 'sk';
    this.matIconRegistry.addSvgIcon(
      `fancyweb_logo`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/logo.svg")
    );
  }

  ngOnInit(): void {
    let cc = window as any;
    let content = {
      message: '',
      dismiss: '',
      link: '',
      href: '/'
    }
    this.translate.get('cookieMessage').subscribe((event) => content.message = event).unsubscribe();
    this.translate.get('cookieDismiss').subscribe((event) => content.dismiss = event).unsubscribe();
    this.translate.get('cookieLinkText').subscribe((event) => content.link = event).unsubscribe();

    cc.cookieconsent.initialise({
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
