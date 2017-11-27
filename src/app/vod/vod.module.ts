import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { VodComponent } from './vodHome/vod.component';

import { VodRoutingModule } from './vod-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        VodRoutingModule
    ],
    declarations: [
        VodComponent
    ],
    providers: []
})

export class VodModule { }