import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { GetDomService } from '../../commonService/getDom.service';


@Component({
    selector: 'app-liveFuture',
    templateUrl: './liveFuture.component.html',
    styleUrls: ['./liveFuture.component.scss']
})

export class LiveFutureComponent implements OnInit, OnDestroy {
    public futureData;
    private pages;
    private moveIndex = 0;

    constructor(
        private getDom: GetDomService
    ) { }

    @Input() set liveFutureData(data: any) {
        if (data) {
            this.futureData = data;
            this.pages = Math.ceil(data['length'] / 5);
        }
    }

    ngOnInit() {

    }
    ngOnDestroy() {

    }
    // 左击滑动
    moveLeft() {
        this.moveIndex--;
        if (this.moveIndex < 0) {
            this.moveIndex = 0;
        }
        if (this.getDom.getClassDom('imgs')) {
            this.getDom.getIdDom('futureContent')['style']['transform'] = 'translate(' + this.moveIndex * (-1110) + 'px)';
            this.getDom.getIdDom('futureContent')['style']['transition'] = 'all 1s linear';
        }
    }
    // 右点击滑动
    moveRight() {
        this.moveIndex++;
        if (this.moveIndex >= this.pages) {
            this.moveIndex = this.pages - 1;
        }
        if (this.getDom.getClassDom('imgs')) {
            this.getDom.getIdDom('futureContent')['style']['transform'] = 'translate(' + this.moveIndex * (-1110) + 'px)';
            this.getDom.getIdDom('futureContent')['style']['transition'] = 'all 1s linear';
        }
    }
}
