import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';
import { HttpModule, Http } from '@angular/http';

import { SuspensionModule } from '../../suspension/suspension.module';
import { LoadingModule } from '../../loading/loading.module';

import { VodDetailComponent } from './vodDetail.component';
import { VodRecmComponent } from './vodRecm/vodRecm.component';
import { PopRecmComponent } from './popRecm/popRecm.component';
import { VodDetailRoutingModule } from './vodDetail-routing.module';

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
        VodDetailRoutingModule
    ],
    declarations: [
        VodDetailComponent,
        VodRecmComponent,
        PopRecmComponent
    ],
    providers: []
})
export class VodDetailModule { }