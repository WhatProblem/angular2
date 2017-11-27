import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VodComponent } from './vodHome/vod.component';

const vodRoutes: Routes = [
    {
        path: '',
        component: VodComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(vodRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})

export class VodRoutingModule { }
