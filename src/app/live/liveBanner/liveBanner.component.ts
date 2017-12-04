import { Component, OnInit, AfterViewInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';

import { GetDomService } from '../../commonService/getDom.service';


@Component({
    selector: 'app-liveBanner',
    templateUrl: './liveBanner.component.html',
    styleUrls: ['./liveBanner.component.scss']
})

export class LiveBannerComponent implements OnInit, OnDestroy {
    public liveBanData;
    public videoPoster;
    private showSelect;
    private scroll;
    private scrollBar;
    private listContainer;
    private listContent;
    private rate;
    private loadEleTimer;

    constructor(
        private getDom: GetDomService
    ) { }

    @Input() set bannerData(data: any) {
        if (data) {
            this.liveBanData = data;
            // 初始化海报
            this.videoPoster = this.liveBanData['0']['channelPosterSrc'];
            this.showSelect = 0;
            // console.log(this.videoPoster);
        }
    }

    ngOnInit() {
        // let self = this;
        // this.loadEleTimer = setTimeout(function () {
        //     // 所需元素
        //     self.scroll = self.getDom.getIdDom('scroll');
        //     self.scrollBar = self.getDom.getIdDom('scrollBar');
        //     self.listContainer = self.getDom.getIdDom('listContainer');
        //     self.listContent = self.getDom.getIdDom('listContent');

        //     self.rate = parseInt(self.listContainer['offsetHeight']) / parseInt(self.listContent['offsetHeight']);
        //     self.scrollBar['style']['height'] = self.rate * self.scroll['offsetHeight'] + 'px';
        //     console.log(self.rate);
        // }, 600);
    }

    // dragScroll(e) {
    //     console.log(e);
    //     let targetSroll = e['target'];
    //     let self = this;
    //     targetSroll.addEventListener('mousemove', (e) => {
    //         let sTop = targetSroll.clientY;
    //         targetSroll['style']['top'] = targetSroll['offsetTop'] + 'px';
    //         self.listContent['style']['top'] = -self.rate * (parseInt(self.listContent['offsetHeight']) / parseInt(self.listContainer['offsetHeight'])) + 'px';
    //     });
    // }

    scrollGo() {

    }

    ngAfterViewInit() {

    }

    ngOnDestroy() {
        clearTimeout(this.loadEleTimer);
    }

    selectChannel(channelData, i) {
        // 点击切换频道时
        this.videoPoster = channelData['channelPosterSrc'];
        this.showSelect = i;
    }
}
