import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthGuard } from './authGuard.service';

import { ProfileComponent } from './profile.component';

import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProfileRoutingModule
    ],
    declarations: [
        ProfileComponent
    ],
    providers: [AuthGuard]
})

export class ProfileModule { }
