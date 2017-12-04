import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';
import { HttpModule, Http } from '@angular/http';

import { GetDomService } from '../commonService/getDom.service';

import { RecmVodComponent } from './recmVod/recmVod.component';
import { RecmPopComponent } from './recmPop/recmPop.component';

import { SuspensionModule } from '../suspension/suspension.module';
import { LoadingModule } from '../loading/loading.module';


import { BannerComponent } from './homeBanner/banner.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';


export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SuspensionModule,
        LoadingModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
        HomeRoutingModule
    ],
    declarations: [
        RecmVodComponent,
        RecmPopComponent,
        BannerComponent,
        HomeComponent
    ],
    providers: [GetDomService]
})

export class HomeModule { }
