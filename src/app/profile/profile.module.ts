import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthGuard } from './authGuard.service';

import { ProfileComponent } from './profile.component';
import { ProfileUserNameComponent } from './profileUserName/profileUserName.component';
import { ProfileFavFilmComponent } from './profileFavFilm/profileFavFilm.component';
import { ProfileHistoryComponent } from './profileHistory/profileHistory.component';
import { ProfileDeviceNameComponent } from './profileDeviceName/profileDeviceName.component';

import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProfileRoutingModule
    ],
    declarations: [
        ProfileComponent,
        ProfileUserNameComponent,
        ProfileFavFilmComponent,
        ProfileHistoryComponent,
        ProfileDeviceNameComponent
    ],
    providers: [AuthGuard]
})

export class ProfileModule { }
