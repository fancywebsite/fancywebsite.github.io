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
import { HowItWorksComponent } from './how-it-works/how-it-wors.component';
import { BuildYourWebComponent } from './build-your-web/build-your-web.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'

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
    BuildYourWebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
