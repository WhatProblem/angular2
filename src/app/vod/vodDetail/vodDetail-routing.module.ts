import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VodDetailComponent } from './vodDetail.component';

const vodDetailRoutes: Routes = [
    { path: 'vod/vodDetail', component: VodDetailComponent },
    { path: 'vod/vodDetail/:id', component: VodDetailComponent }
];


@NgModule({
    imports: [
        RouterModule.forChild(vodDetailRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class VodDetailRoutingModule { }