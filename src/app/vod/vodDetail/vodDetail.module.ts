import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SuspensionModule } from '../../suspension/suspension.module';
import { LoadingModule } from '../../loading/loading.module';

import { VodDetailComponent } from './vodDetail.component';
import { VodRecmComponent } from './vodRecm/vodRecm.component';
import { PopRecmComponent } from './popRecm/popRecm.component';
import { VodDetailRoutingModule } from './vodDetail-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SuspensionModule,
        LoadingModule,
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