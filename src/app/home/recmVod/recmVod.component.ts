import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'underscore';
import { EventService } from '../../commonService/event.service';
import { GetDomService } from '../../commonService/getDom.service';


@Component({
    selector: 'app-recmVod',
    templateUrl: './recmVod.component.html',
    styleUrls: ['./recmVod.component.scss']
})

export class RecmVodComponent implements OnInit, OnDestroy {
    private imgs;
    private curSuspension;
    private ctrlSuspensionShow = false;
    private moveIndex = 0;
    // private moveRightTimer;
    // private moveLeftTimer;
    private imgsLen;
    private pages;

    constructor(
        private router: Router,
        private getDom: GetDomService
    ) { }

    @Input() set recmVodDatas(data: any) {
        if (data) {
            this.imgs = data['recmVodImg']['imgSrc'];

            this.imgsLen = this.imgs['length'];
            this.pages = Math.floor(this.imgsLen / 5);
            console.log('imgsVod资源查看' + this.imgsLen);
        }
    }


    ngOnInit() {

    }

    ngOnDestroy() {
        // clearInterval(this.moveRightTimer);
        // clearInterval(this.moveLeftTimer);
    }

    jumpToVodDetail(imgInfo, i) {
        let to = i + 1;
        this.router.navigate(['/vod/vodDetail', to]);
    }

    showHomeDetail(recmVodData, index, event) {
        this.curSuspension = index;
        this.ctrlSuspensionShow = true;

        console.log(recmVodData);
        console.log(index);
        console.log(event);
        let susObj = {
            'recmVodData': recmVodData,
            'index': index,
            'event': event
        };

        EventService.emit('showHomeSuspension', susObj);
    }

    hideHomeDetail(recmVodData, index, event) {
        this.ctrlSuspensionShow = false;
    }

    moveLeft() {
        this.moveIndex--;
        if (this.moveIndex < 0) {
            this.moveIndex = 0;
            return;
        } else {
            if (this.getDom.getClassDom('recmVodContent')) {
                // let distance = 62.5;
                // let self = this;
                // clearInterval(self.moveLeftTimer);
                // clearInterval(self.moveRightTimer);
                // this.moveLeftTimer = setInterval(() => {
                //     let start = Number((self.getDom.getClassDom('recmVodContent')[0]['style']['left']).slice(0, -2));
                //     let endTarget = start + distance;
                //     self.getDom.getClassDom('recmVodContent')[0]['style']['left'] = endTarget + 'px';
                //     if (Number(endTarget) >= 0) {
                //         self.getDom.getClassDom('recmVodContent')[0]['style']['left'] = 0 + 'px';
                //         clearInterval(self.moveLeftTimer);
                //     }
                // }, 20);

                this.getDom.getClassDom('recmVodContent')[0]['style']['transform'] = 'translate(' + 1250 * (this.moveIndex) + 'px)';
                this.getDom.getClassDom('recmVodContent')[0]['style']['transition'] = 'all 1s linear';
            }
        }
    }

    moveRight() {
        this.moveIndex++;
        if (this.moveIndex > this.pages) {
            this.moveIndex = this.pages;
            return;
        } else {
            if (this.getDom.getClassDom('recmVodContent')) {
                // let distance = 62.5;
                // let self = this;
                // clearInterval(self.moveLeftTimer);
                // clearInterval(self.moveRightTimer);
                // this.moveRightTimer = setInterval(() => {
                //     let start = Number((self.getDom.getClassDom('recmVodContent')[0]['style']['left']).slice(0, -2));
                //     let endTarget = start + (-1) * self.moveIndex * distance;
                //     self.getDom.getClassDom('recmVodContent')[0]['style']['left'] = endTarget + 'px';
                //     if (Number(endTarget) <= Number(-1250)) {
                //         self.getDom.getClassDom('recmVodContent')[0]['style']['left'] = -1250 + 'px';
                //         clearInterval(self.moveRightTimer);
                //     }
                // }, 20);

                this.getDom.getClassDom('recmVodContent')[0]['style']['transform'] = 'translate(' + (-1250 * this.moveIndex) + 'px)';
                this.getDom.getClassDom('recmVodContent')[0]['style']['transition'] = 'all 1s linear';
            }
        }
    }
}
