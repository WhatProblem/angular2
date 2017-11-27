import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EventService } from '../commonService/event.service';


@Component({
    selector: 'app-live',
    templateUrl: './live.component.html',
    styleUrls: ['./live.component.scss']
})

export class LiveComponent implements OnInit, OnDestroy {
    private liveTVData;
    private bannerData;
    private liveCurData;
    private liveNextData;

    // 加载圈模拟后台数据刷新
    private showLoading = true;
    private loadingTimer;

    constructor(
        private http: HttpClient
    ) { }

    ngOnInit() {
        let self = this;
        this.loadingTimer = setTimeout(function () {
            self.showLoading = false;
        }, 500);

        this.http.get('assets/data.json').subscribe(data => {
            this.liveTVData = data['liveTV'];

            this.bannerData = this.liveTVData['liveBanner'];
            console.log(this.bannerData);
            // this.liveCurData = data[''];
            // this.liveNextData = data[''];
        });
    }

    ngOnDestroy() {
        clearTimeout(this.loadingTimer);
    }
}
