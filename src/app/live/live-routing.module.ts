import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LiveComponent } from './live.component';


const liveRoutes: Routes = [
    {
        path: '',
        component: LiveComponent
    }
]


@NgModule({
    imports: [
        RouterModule.forChild(liveRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})

export class LiveRoutingModule { }