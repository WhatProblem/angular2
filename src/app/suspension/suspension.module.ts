import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuspensionComponent } from './suspension.component';
import { SuspensionService } from './suspension.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        SuspensionComponent
    ],
    exports: [SuspensionComponent],
    providers: [SuspensionService]
})
export class SuspensionModule { }
