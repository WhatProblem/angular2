import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as _ from 'underscore';
import { Router } from '@angular/router';
import { GetDomService } from '../../../commonService/getDom.service';

@Component({
    selector: 'app-popRecm',
    templateUrl: './popRecm.component.html',
    styleUrls: ['./popRecm.component.scss']
})

export class PopRecmComponent implements OnInit {
    private imgs;
    private showSus = false;
    private moveIndex = 0;
    private imgsLen;
    private pages;

    constructor(
        private router: Router,
        private getDom: GetDomService
    ) { }

    @Output() changePopCtrlLoading = new EventEmitter<boolean>();

    @Input() set popRecmDatas(data: any) {
        if (data) {
            this.imgs = data['recmPopImg']['imgSrc'];

            this.imgsLen = this.imgs['length'];
            this.pages = Math.floor(this.imgsLen / 5);
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
            console.log(offsetX);

            sus['style']['left'] = 230 + Number(offsetX) + 'px';
            sus['style']['top'] = 0 + 'px';
        }
        if (index % 5 === 3 || index % 5 === 4) {
            let sus = this.getDom.getClassDom('suspensionp')[0];
            let offsetX = event['target']['offsetLeft'];
            console.log(offsetX);

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
            if (this.getDom.getClassDom('recmPopContent')) {
                this.getDom.getClassDom('recmPopContent')[0]['style']['transform'] = 'translate(' + 1250 * (this.moveIndex) + 'px)';
                this.getDom.getClassDom('recmPopContent')[0]['style']['transition'] = 'all 1s linear';
            }
        }
    }

    moveRight() {
        this.moveIndex++;
        if (this.moveIndex > this.pages) {
            this.moveIndex = this.pages;
            return;
        } else {
            if (this.getDom.getClassDom('recmPopContent')) {
                this.getDom.getClassDom('recmPopContent')[0]['style']['transform'] = 'translate(' + (-1250 * this.moveIndex) + 'px)';
                this.getDom.getClassDom('recmPopContent')[0]['style']['transition'] = 'all 1s linear';
            }
        }
    }
}
