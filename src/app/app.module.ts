import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ApplicationRef } from '@angular/core';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';
// import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



//  Platform and Environment providers/directives/pipes

import { AuthGuard } from './profile/authGuard.service';
import { LoginService } from './login/login.service';

import { ENV_PROVIDERS } from './environment';

// App is our top level component
import { HeaderComponent } from './navbar/header.component';
import { FooterComponent } from './footerBar/footer.component';
import { LoginComponent } from './login/login.component';
import { LanguageComponent } from './language/language.component';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { VodDetailModule } from './vod/vodDetail/vodDetail.module';
import { AppRoutingModule } from './app-routing.module';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

import '../styles/styles.scss';
import '../styles/headings.css';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    HomeModule,
    VodDetailModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LanguageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    ENV_PROVIDERS,
    AuthGuard,
    LoginService
  ]
})
export class AppModule { }
