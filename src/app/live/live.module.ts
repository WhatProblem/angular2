import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';
import { HttpModule, Http } from '@angular/http';

import { LoadingModule } from '../loading/loading.module';

import { LiveBannerComponent } from './liveBanner/liveBanner.component';
import { LiveCurrentComponent } from './liveCurrent/liveCurrent.component';
import { LiveFutureComponent } from './liveFuture/liveFuture.component';
import { LiveComponent } from './live.component';

import { LiveRoutingModule } from './live-routing.module';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
        LoadingModule,
        LiveRoutingModule
    ],
    declarations: [
        LiveComponent,
        LiveBannerComponent,
        LiveCurrentComponent,
        LiveFutureComponent
    ],
    providers: []
})

export class LiveModule { }