import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';

import { VodPreloadingStrategy } from './vod/vod-preloading.strategy';
import { AuthGuard } from './profile/authGuard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'live',
        loadChildren: 'app/live/live.module#LiveModule',
        // data: { preload: true }
    },
    {
        path: 'vod',
        loadChildren: 'app/vod/vod.module#VodModule',
        data: { preload: true }
    },
    {
        path: 'profile',
        loadChildren: 'app/profile/profile.module#ProfileModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes,
            // 惰性加载模块全部预加载
            // {
            //     useHash: Boolean(history.pushState) === false,
            //     preloadingStrategy: PreloadAllModules
            // },
            // 自定义预加载
            {
                // enableTracing: true, // <-- debugging purposes only
                preloadingStrategy: VodPreloadingStrategy,

            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        VodPreloadingStrategy,
        AuthGuard
    ]
})

export class AppRoutingModule { }