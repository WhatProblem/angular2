import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GetDomService } from '../commonService/getDom.service';

import { RecmVodComponent } from './recmVod/recmVod.component';
import { RecmPopComponent } from './recmPop/recmPop.component';

import { SuspensionModule } from '../suspension/suspension.module';
import { LoadingModule } from '../loading/loading.module';


import { BannerComponent } from './homeBanner/banner.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SuspensionModule,
        LoadingModule,
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
