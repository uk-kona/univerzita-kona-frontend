import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { IntroComponent } from './components/content/intro/intro.component';
import { AboutComponent } from './components/content/about/about.component';

import { StoreModule } from '@ngrx/store';
import { formReducer } from './state/form.reducer';
import { NgrxFormsModule } from 'ngrx-forms';
import { formsFeatureName } from './state/form.selector';
import { GenerateDataService } from './services/generate-data.service';

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

    StoreModule.forFeature(formsFeatureName, formReducer),
    NgrxFormsModule,
  ],
  exports: [
    UniverzitaKonaComponent,
  ],
  providers: [
    GenerateDataService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class UniverzitaKonaModule { }
