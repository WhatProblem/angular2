import { Component, OnInit, OnDestroy } from '@angular/core';
import * as _ from 'underscore';

import { EventService } from './commonService/event.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
    // private showLoading = true;
    // private loadingTimer;

    constructor() { }


    ngOnInit() {
        // let self = this;
        // this.loadingTimer = setTimeout(function () {
        //     self.showLoading = false;
        // }, 1000);

        EventService.on('SHOW_LOGIN', () => {
            if (document.getElementById('login')) {
                document.getElementById('login')['style']['display'] = 'block';
            }
        });
        EventService.on('HIDE_LOGIN', () => {
            if (document.getElementById('login')) {
                document.getElementById('login')['style']['display'] = 'none';
            }
        });
    }

    ngOnDestroy() {
        // clearTimeout(this.loadingTimer);
    }
}
