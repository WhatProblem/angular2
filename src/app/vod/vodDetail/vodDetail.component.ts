import 'rxjs/add/operator/switchMap';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import * as _ from 'underscore';




@Component({
    selector: 'app-vodDetail',
    templateUrl: './vodDetail.component.html',
    styleUrls: ['./vodDetail.component.scss']
})

export class VodDetailComponent implements OnInit, OnDestroy {
    private vodDetailData;
    private datas;
    private vodRecmData;
    private popRecmData;

    // 模仿页面初始化加载圈
    private loadingTimer;
    private showLoading = true;

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        let self = this;
        this.loadingTimer = setTimeout(() => {
            self.showLoading = false;
        }, 1000);

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        this.http.get('assets/data.json').subscribe(data => {
            self.vodDetailData = data['vod']['vodDetail'];
            self.vodRecmData = data['recmVod'];
            self.popRecmData = data['recmPop'];
            console.log(data);
            console.log(2222222222222);
            self.route.paramMap.switchMap((params: ParamMap) =>
                _.filter(self.vodDetailData, (item) => {
                    return item['ID'] === Number(params.get('id'));
                })

            ).subscribe((detailData: any) => { self.datas = detailData; });
            console.log(self.datas);
        });
    }

    ngOnDestroy() {
        clearTimeout(this.loadingTimer);
    }

    changeVodCtrlLoading(loadingVodCtrl) {
        if (loadingVodCtrl) {
            this.showLoading = loadingVodCtrl;
            let self = this;
            console.log('loadingCtrl:' + loadingVodCtrl);
            setTimeout(() => {
                self.showLoading = false;
            }, 1000);
        }
    }
    changePopCtrlLoading(loadingPopCtrl) {
        if (loadingPopCtrl) {
            this.showLoading = loadingPopCtrl;
            let self = this;
            console.log('loadingCtrl:' + loadingPopCtrl);
            setTimeout(() => {
                self.showLoading = false;
            }, 1000);
        }
    }
}
