import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ProfileUserNameComponent } from './profileUserName/profileUserName.component';
import { ProfileFavFilmComponent } from './profileFavFilm/profileFavFilm.component';
import { ProfileHistoryComponent } from './profileHistory/profileHistory.component';
import { ProfileDeviceNameComponent } from './profileDeviceName/profileDeviceName.component';

import { AuthGuard } from './authGuard.service';

const profileRoutes: Routes = [
    {
        // path: 'profile',
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        children: [

            {
                path: 'userName',
                component: ProfileUserNameComponent
            },
            {
                path: 'favFilm',
                component: ProfileFavFilmComponent
            },
            {
                path: 'history',
                component: ProfileHistoryComponent
            },
            {
                path: 'deviceName',
                component: ProfileDeviceNameComponent
            }
        ]
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(profileRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [AuthGuard]
})

export class ProfileRoutingModule { }
