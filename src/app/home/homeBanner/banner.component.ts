import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit, OnDestroy {
    private sliderTimer;
    private smallTimer;
    private n = 0;
    private m = 0;

    constructor() { }

    ngOnInit() {
        this.autoPlayBan();
        // this.autoPlaySmall();
    }

    // 自动滚动
    autoPlayBan() {
        // 轮播图数据
        let self = this;
        let bigBanOne = this.getDom('bigBanOne')[0];
        // let smallBanOne = this.getDom('smallBanOne')[0];
        // let smallBanTwo = this.getDom('smallBanTwo')[0];

        this.sliderTimer = setInterval(() => {
            (self.n === 5) ? (self.n = 0) : (self.n++);
            bigBanOne['style']['left'] = -1349 * self.n + 'px';
        }, 3000);

        // this.smallTimer = setInterval(() => {
        //     (self.m === 6) ? (self.m = 0) : (self.m++);
        //     if ((parseInt(smallBanOne['style']['top']) <= 0 && parseInt(smallBanOne['style']['top']) >= -480) &&
        //         (parseInt(smallBanTwo['style']['top']) > 0 && parseInt(smallBanTwo['style']['top']) <= 480)) {
        //         smallBanOne['style']['top'] = -80 * self.m + 'px';
        //         smallBanTwo['style']['top'] = -80 * self.m + 480 + 'px';
        //         if ((parseInt(smallBanOne['style']['top']) === -480) && (parseInt(smallBanTwo['style']['top']) === 0)) {
        //             smallBanOne['style']['top'] = 480 + 'px';
        //         }
        //     }

        //     if ((parseInt(smallBanTwo['style']['top']) <= 0 && parseInt(smallBanTwo['style']['top']) >= -480) &&
        //         (parseInt(smallBanOne['style']['top']) > 0 && parseInt(smallBanOne['style']['top']) <= 480)) {
        //         smallBanTwo['style']['top'] = -80 * self.m + 'px';
        //         smallBanOne['style']['top'] = -80 * self.m + 480 + 'px';
        //         if ((parseInt(smallBanTwo['style']['top']) === -480) && (parseInt(smallBanOne['style']['top']) === 0)) {
        //             smallBanTwo['style']['top'] = 480 + 'px';
        //         }
        //     }
        // }, 3000);
    }

    // 自动轮播小图
    // autoPlaySmall() {
    //     let self = this;
    //     let smallBanOne = this.getDom('smallBanOne')[0];
    //     let smallBanTwo = this.getDom('smallBanTwo')[0];
    //     this.smallTimer = setInterval(() => {
    //         (self.m === 6) ? (self.m = 0) : (self.m++);
    //         if ((parseInt(smallBanOne['style']['top']) <= 0 && parseInt(smallBanOne['style']['top']) > -480) &&
    //             (parseInt(smallBanTwo['style']['top']) > 0 && parseInt(smallBanTwo['style']['top']) <= 480)) {
    //             smallBanOne['style']['top'] = -80 * self.m + 'px';
    //             smallBanTwo['style']['top'] = -80 * self.m + 480 + 'px';
    //             if ((parseInt(smallBanOne['style']['top']) === -480) && (parseInt(smallBanTwo['style']['top']) === 0)) {
    //                 smallBanOne['style']['top'] = 480 + 'px';
    //             }
    //         }

    //         if ((parseInt(smallBanTwo['style']['top']) <= 0 && parseInt(smallBanTwo['style']['top']) > -480) &&
    //             (parseInt(smallBanOne['style']['top']) > 0 && parseInt(smallBanOne['style']['top']) <= 480)) {
    //             smallBanTwo['style']['top'] = -80 * self.m + 'px';
    //             smallBanOne['style']['top'] = -80 * self.m + 480 + 'px';
    //             if ((parseInt(smallBanTwo['style']['top']) === -480) && (parseInt(smallBanOne['style']['top']) === 0)) {
    //                 smallBanTwo['style']['top'] = 480 + 'px';
    //             }
    //         }
    //     }, 3000);
    // }

    stopBan() {
        clearInterval(this.sliderTimer);
    }

    startBan() {
        this.autoPlayBan();
    }

    ngOnDestroy() {
        clearInterval(this.sliderTimer);
    }

    getDom(ele: string) {
        return document.getElementsByClassName(ele);
    }
}
