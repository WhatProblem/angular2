import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'underscore';
import { GetDomService } from '../../../commonService/getDom.service';


@Component({
    selector: 'app-vodRecm',
    templateUrl: './vodRecm.component.html',
    styleUrls: ['./vodRecm.component.scss']
})

export class VodRecmComponent implements OnInit {
    private imgs;
    private showSus = false;
    private moveIndex = 0;
    private imgsLen;
    private pages;

    constructor(
        private router: Router,
        private getDom: GetDomService
    ) { }

    @Output() changeVodCtrlLoading = new EventEmitter<boolean>();

    @Input() set vodRecmDatas(data: any) {
        if (data) {
            this.imgs = data['recmVodImg']['imgSrc'];

            this.imgsLen = this.imgs['length'];
            this.pages = Math.floor(this.imgsLen / 5);
        }
    }

    ngOnInit() {

    }

    jumpToVodDetail(imgInfo, i) {
        let to = i + 1;
        this.changeVodCtrlLoading.emit(true);
        this.router.navigate(['/vod/vodDetail', to]);
    }

    showSusDetail(imgData, index, event) {
        this.showSus = true;
        console.log('true');
        if (index % 5 === 0 || index % 5 === 1 || index % 5 === 2) {
            let sus = this.getDom.getClassDom('suspension')[0];
            let offsetX = event['target']['offsetLeft'];
            // console.log(offsetX);

            sus['style']['left'] = 230 + Number(offsetX) + 'px';
            sus['style']['top'] = 0 + 'px';
        }
        if (index % 5 === 3 || index % 5 === 4) {
            let sus = this.getDom.getClassDom('suspension')[0];
            let offsetX = event['target']['offsetLeft'];
            // console.log(offsetX);

            sus['style']['left'] = -300 + Number(offsetX) + 'px';
            sus['style']['top'] = 0 + 'px';
        }
    }

    showSusDetails() {
        this.showSus = true;
    }

    hideSusDetails() {
        this.showSus = false;
    }

    hideSusDetail(imgData, index, event) {
        this.showSus = false;
        console.log('false');
    }

    moveLeft() {
        this.moveIndex--;
        if (this.moveIndex < 0) {
            this.moveIndex = 0;
            return;
        } else {
            if (this.getDom.getClassDom('recmVodContent')) {
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
                this.getDom.getClassDom('recmVodContent')[0]['style']['transform'] = 'translate(' + (-1250 * this.moveIndex) + 'px)';
                this.getDom.getClassDom('recmVodContent')[0]['style']['transition'] = 'all 1s linear';
            }
        }
    }
}
