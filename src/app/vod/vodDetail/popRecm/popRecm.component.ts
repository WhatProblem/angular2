import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import * as _ from 'underscore';
import { Router } from '@angular/router';
import { GetDomService } from '../../../commonService/getDom.service';

import { SuspensionComponent } from '../../../suspension/suspension.component';

@Component({
    selector: 'app-popRecm',
    templateUrl: './popRecm.component.html',
    styleUrls: ['./popRecm.component.scss']
})

export class PopRecmComponent implements OnInit {
    public imgs;
    public showSus = false;
    private moveIndex = 0;
    private imgsLen;
    private pages;

    @ViewChild(SuspensionComponent) suspension: SuspensionComponent;

    constructor(
        private router: Router,
        private getDom: GetDomService
    ) { }

    @Output() changePopCtrlLoading = new EventEmitter<boolean>();

    @Input() set popRecmDatas(data: any) {
        if (data) {
            this.imgs = data['recmPopImg']['imgSrc'];

            this.imgsLen = this.imgs['length'];
            this.pages = Math.ceil(this.imgsLen / 5);
        }
    }

    ngOnInit() {
        // this.http.get('assets/data.json').subscribe(data => {
        //     this.imgs = data['recmPop']['recmPopImg']['imgSrc'];
        // });
    }

    jumpToVodDetail(imgInfo, i) {
        let to = i + 1;
        this.changePopCtrlLoading.emit(true);
        this.router.navigate(['/vod/vodDetail', to]);
    }

    showSusDetail(imgData, index, event) {
        this.showSus = true;
        console.log('true');
        if (index % 5 === 0 || index % 5 === 1 || index % 5 === 2) {
            let sus = this.getDom.getClassDom('suspensionp')[0];
            let offsetX = event['target']['offsetLeft'];
            // console.log(offsetX);

            sus['style']['left'] = 240 + Number(offsetX) + 'px';
            sus['style']['top'] = 0 + 'px';
            this.suspension.showLeftArrow = true;
            this.suspension.showRightArrow = false;
        }
        if (index % 5 === 3 || index % 5 === 4) {
            let sus = this.getDom.getClassDom('suspensionp')[0];
            let offsetX = event['target']['offsetLeft'];
            console.log(offsetX);

            sus['style']['left'] = -340 + Number(offsetX) + 'px';
            sus['style']['top'] = 0 + 'px';
            this.suspension.showRightArrow = true;
            this.suspension.showLeftArrow = false;
        }
    }

    showSusDetails() {
        this.showSus = true;
        this.suspension.showRightArrow = false;
        this.suspension.showLeftArrow = false;
    }

    hideSusDetails() {
        this.showSus = false;
    }

    hideSusDetail(imgData, index, event) {
        this.showSus = false;
        console.log('false');
        this.suspension.showRightArrow = false;
        this.suspension.showLeftArrow = false;
    }

    moveLeft() {
        this.moveIndex--;
        if (this.moveIndex < 0) {
            this.moveIndex = 0;
            return;
        } else {
            if (this.getDom.getClassDom('recmPopContent')) {
                this.getDom.getClassDom('recmPopContent')[0]['style']['transform'] = 'translate(' + 1250 * (-this.moveIndex) + 'px)';
                this.getDom.getClassDom('recmPopContent')[0]['style']['transition'] = 'all 1s linear';
            }
        }
    }

    moveRight() {
        this.moveIndex++;
        if (this.moveIndex >= this.pages) {
            this.moveIndex = this.pages - 1;
            return;
        } else {
            if (this.getDom.getClassDom('recmPopContent')) {
                this.getDom.getClassDom('recmPopContent')[0]['style']['transform'] = 'translate(' + (-1250 * this.moveIndex) + 'px)';
                this.getDom.getClassDom('recmPopContent')[0]['style']['transition'] = 'all 1s linear';
            }
        }
    }
}
