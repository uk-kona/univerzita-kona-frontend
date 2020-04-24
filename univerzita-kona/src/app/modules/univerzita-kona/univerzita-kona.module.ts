import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { NavComponent } from './components/nav/nav.component';
import { UniverzitaKonaComponent } from './univerzita-kona.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/shared/factories/http-loader.factory';
import { HelpRequestComponent } from './components/content/help-request/help-request.component';
import { HelpFinanciallyComponent } from './components/content/help-financially/help-financially.component';
import { HelpByActivityComponent } from './components/content/help-by-activity/help-by-activity.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IntroComponent } from './components/content/intro/intro.component';
import { AboutComponent } from './components/content/about/about.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { StoreModule } from '@ngrx/store';
import { reducer, formsFeatureName } from './state/product.reducer';



@NgModule({
  declarations: [
    ContentComponent,
    NavComponent,
    UniverzitaKonaComponent,
    HelpRequestComponent,
    HelpFinanciallyComponent,
    HelpByActivityComponent,
    IntroComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'sk',
    }),
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    NgxIntlTelInputModule,

    StoreModule.forFeature(formsFeatureName, reducer)
  ],
  exports: [
    UniverzitaKonaComponent,
  ],
})
export class UniverzitaKonaModule { }