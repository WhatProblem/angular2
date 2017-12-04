import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';
import { HttpModule, Http } from '@angular/http';


import { VodComponent } from './vodHome/vod.component';

import { VodRoutingModule } from './vod-routing.module';

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
        VodRoutingModule
    ],
    declarations: [
        VodComponent
    ],
    providers: []
})

export class VodModule { }