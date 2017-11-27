import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './loading.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LoadingComponent
    ],
    exports: [
        LoadingComponent
    ]
})
export class LoadingModule {

}
