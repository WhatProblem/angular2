import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoadingModule } from '../loading/loading.module';

import { LiveBannerComponent } from './liveBanner/liveBanner.component';
import { LiveComponent } from './live.component';

import { LiveRoutingModule } from './live-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LoadingModule,
        LiveRoutingModule
    ],
    declarations: [
        LiveComponent,
        LiveBannerComponent
    ],
    providers: []
})

export class LiveModule { }