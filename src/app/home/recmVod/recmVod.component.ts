import { Component, OnInit, OnDestroy, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'underscore';
import { EventService } from '../../commonService/event.service';
import { GetDomService } from '../../commonService/getDom.service';

import { SuspensionComponent } from '../../suspension/suspension.component';


@Component({
    selector: 'app-recmVod',
    templateUrl: './recmVod.component.html',
    styleUrls: ['./recmVod.component.scss']
})

export class RecmVodComponent implements OnInit, OnDestroy {
    public imgs;
    private moveIndex = 0;
    private imgsLen;
    private pages;
    public showSus = false;
    // private showLeftArrow = true;
    // private showRightArrow = true;

    @ViewChild(SuspensionComponent) suspension: SuspensionComponent;

    constructor(
        private router: Router,
        private getDom: GetDomService
    ) { }

    @Input() set recmVodDatas(data: any) {
        if (data) {
            this.imgs = data['recmVodImg']['imgSrc'];

            this.imgsLen = this.imgs['length'];
            this.pages = Math.ceil(this.imgsLen / 5);
            console.log('imgsVod资源查看' + this.imgsLen);
        }
    }


    ngOnInit() {

    }

    ngOnDestroy() {

    }

    jumpToVodDetail(imgInfo, i) {
        let to = i + 1;
        this.router.navigate(['/vod/vodDetail', to]);
    }

    // 悬浮框
    showHomeDetail(recmVodData, index, event) {
        let offsetX = event['target']['offsetLeft'];
        if (index % 5 === 0 || index % 5 === 1 || index % 5 === 2) {
            this.getDom.getIdDom('suspension')['style']['left'] = offsetX + 240 + 'px';
            this.suspension.showLeftArrow = true;
            this.suspension.showRightArrow = false;
        } else {
            this.getDom.getIdDom('suspension')['style']['left'] = offsetX - 340 + 'px';
            this.suspension.showRightArrow = true;
            this.suspension.showLeftArrow = false;
        }
        this.showSus = true;
    }

    hideHomeDetail(recmVodData, index, event) {
        this.showSus = false;
        this.suspension.showLeftArrow = false;
        this.suspension.showRightArrow = false;
    }
    showHomeDetails() {
        this.showSus = true;
        this.suspension.showLeftArrow = false;
        this.suspension.showRightArrow = false;
    }
    hideHomeDetails() {
        this.showSus = false;
    }
    // 鼠标点击左移动
    moveLeft() {
        this.moveIndex--;
        if (this.moveIndex < 0) {
            this.moveIndex = 0;
            return;
        } else {
            if (this.getDom.getClassDom('recmVodContent')) {
                this.getDom.getClassDom('recmVodContent')[0]['style']['transform'] = 'translate(' + 1250 * (-this.moveIndex) + 'px)';
                this.getDom.getClassDom('recmVodContent')[0]['style']['transition'] = 'all 1s linear';
            }
        }
    }
    // 鼠标点击右移动
    moveRight() {
        this.moveIndex++;
        if (this.moveIndex >= this.pages) {
            this.moveIndex = this.pages - 1;
            return;
        } else {
            if (this.getDom.getClassDom('recmVodContent')) {
                this.getDom.getClassDom('recmVodContent')[0]['style']['transform'] = 'translate(' + (-1250 * this.moveIndex) + 'px)';
                this.getDom.getClassDom('recmVodContent')[0]['style']['transition'] = 'all 1s linear';
            }
        }
    }
}
