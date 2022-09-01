import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  public cc: any;

  constructor(private translate: TranslateService,) { }

  public getCookie(name: string) {
    let cookieArray: Array<string> = document.cookie.split(';');
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < cookieArray.length; i += 1) {
      c = cookieArray[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  public deleteCookie(cookieName: string) {
    this.setCookie({ name: cookieName, value: '', expireDays: -1 });
  }

  public setCookie(params: any) {
    let date: Date = new Date();
    date.setTime(date.getTime() + (params.expireDays ? params.expireDays : 1) * 24 * 60 * 60 * 1000);
    document.cookie =
      (params.name ? params.name : '') + '=' +
      (params.value ? params.value : '') + ';' +
      (params.session && params.session == true ? '' : 'expires=' + date.toUTCString() + ';') + 'path=' +
      (params.path && params.path.length > 0 ? params.path : '/') + ';' +
      (location.protocol === 'https:' && params.secure && params.secure == true ? 'secure' : '');
  }

  public initCookieConsent(): void {
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
