import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EventService } from '../commonService/event.service';


@Component({
    selector: 'app-live',
    templateUrl: './live.component.html',
    styleUrls: ['./live.component.scss']
})

export class LiveComponent implements OnInit, OnDestroy {
    public liveTVData;
    public bannerData;
    public liveCurData;
    public liveFutureData;

    // 加载圈模拟后台数据刷新
    public showLoading = true;
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
            this.liveCurData = this.liveTVData['liveCur'];
            this.liveFutureData = this.liveTVData['liveFuture'];
            // this.liveNextData = data[''];
            console.log('预加载预加载预加载');
        });
    }

    ngOnDestroy() {
        clearTimeout(this.loadingTimer);
    }
}
