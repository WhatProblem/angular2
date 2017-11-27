import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EventService } from '../commonService/event.service';
import { GetDomService } from '../commonService/getDom.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
    public recmVodData;
    public recmPopData;

    // private suspensions;

    // 模仿页面初始化加载圈
    private loadingTimer;
    private showLoading = true;

    constructor(
        private http: HttpClient,
        private getDom: GetDomService
    ) { }

    ngOnInit() {
        let self = this;
        this.loadingTimer = setTimeout(function () {
            self.showLoading = false;
        }, 1000);

        this.http.get('assets/data.json').subscribe(data => {
            this.recmVodData = data['recmVod'];
            this.recmPopData = data['recmPop'];
        });
    }

    ngOnDestroy() {
        clearTimeout(this.loadingTimer);
    }
}
