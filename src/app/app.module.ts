import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AboutUsComponent } from './about-us/about-us.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionComponent } from './base/section/section.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { NavigationItemComponent } from './navigation/navigation-item/navigation-item.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductFeaturesComponent } from './product-features/product-features.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MapComponent } from './map/map.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { BioComponent } from './about-us/bio/bio.component';
import { FeatureComponent } from './product-features/feature/feature.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { BuildYourWebComponent } from './build-your-web/build-your-web.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessDialogComponent } from './contact/success-dialog/success-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonComponent } from './base/button/button.component';
import { NgcCookieConsentModule } from 'ngx-cookieconsent';
import { cookieConfig } from './cookie.service';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';
import { environment } from 'src/environments/environment';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { HowItWorksRowComponent } from './how-it-works/how-it-works-row/how-it-works-row.component';
import { ReviewComponent } from './reviews/review/review.component';
import { ReviewListComponent } from './reviews/review-list.component';
import { WebComponent } from './portfolio/web/web.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    ProductFeaturesComponent,
    ContactComponent,
    PortfolioComponent,
    NavigationComponent,
    NavigationItemComponent,
    SectionComponent,
    MapComponent,
    BioComponent,
    HowItWorksComponent,
    FeatureComponent,
    BuildYourWebComponent,
    FooterComponent,
    SuccessDialogComponent,
    ButtonComponent,
    ScrollToTopComponent,
    HowItWorksRowComponent,
    ReviewComponent,
    ReviewListComponent,
    WebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    GoogleTagManagerModule.forRoot({
      id: environment.gtmId,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
    }),
    BrowserAnimationsModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
