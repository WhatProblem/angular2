import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';

import { GetDomService } from '../../commonService/getDom.service';



@Component({
    selector: 'app-liveCurrent',
    templateUrl: './liveCurrent.component.html',
    styleUrls: ['./liveCurrent.component.scss']
})

export class LiveCurrentComponent implements OnInit, OnDestroy {
    public curData;
    private pages;
    private moveIndex = 0;

    constructor(
        private getDom: GetDomService
    ) { }

    @Input() set liveCurData(data: any) {
        if (data) {
            this.curData = data;
            this.pages = Math.ceil(data['length'] / 5);
        }
    }

    ngOnInit() {
        // let self = this;
        // setTimeout(function () {
        //     // self.getDom.getIdDom('img-' + self.pages * 5 + 1)['style']['left']
        // }, 600);
    }

    ngOnDestroy() {

    }

    moveLeft() {
        this.moveIndex--;
        if (this.moveIndex < 0) {
            this.moveIndex = 0;
        }
        if (this.getDom.getClassDom('imgs')) {
            this.getDom.getIdDom('content')['style']['transform'] = 'translate(' + 1110 * (-this.moveIndex) + 'px)';
            this.getDom.getIdDom('content')['style']['transition'] = 'all 1s linear';
        }
    }

    moveRight() {
        this.moveIndex++;
        if (this.moveIndex >= this.pages) {
            this.moveIndex = this.pages - 1;
        }
        if (this.getDom.getClassDom('imgs')) {
            this.getDom.getIdDom('content')['style']['transform'] = 'translate(' + (-1110 * this.moveIndex) + 'px)';
            this.getDom.getIdDom('content')['style']['transition'] = 'all 1s linear';
        }
    }
}
