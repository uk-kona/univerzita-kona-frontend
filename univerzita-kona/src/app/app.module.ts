import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { UniverzitaKonaModule } from './modules/univerzita-kona/univerzita-kona.module';
import { HttpLoaderFactory } from './shared/factories/http-loader.factory';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule, ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromForm from './modules/univerzita-kona/state/form.reducer';
import { NgrxFormsModule } from 'ngrx-forms';
import { EffectsModule } from '@ngrx/effects';

const reducers: ActionReducerMap<any> = {
  forms: fromForm.formReducer
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['forms'], rehydrate: true})(reducer);
}
const metaReducers: MetaReducer<any, any>[] = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'sk',
    }),

    BrowserAnimationsModule,
    StoreModule.forRoot(
      reducers,
      {metaReducers}
    ),
    StoreDevtoolsModule.instrument({
      name: 'Univerzita Kona - DevTools',
      maxAge: 25
    }),
    NgrxFormsModule,

    CoreModule,
    UniverzitaKonaModule,
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
