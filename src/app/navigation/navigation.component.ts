import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  @Input() public currentLang = '';
  @Input() public cc: any;

  constructor(private translate: TranslateService) { }

  changeUsedLang(lang: string) {
    this.translate.use(lang);
    this.translate.currentLang = lang;
    this.currentLang = lang;
  }

}
