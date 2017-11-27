import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'underscore';
// import { EventService } from '../../commonService/event.service';
import { GetDomService } from '../../commonService/getDom.service';


@Component({
    selector: 'app-recmPop',
    templateUrl: './recmPop.component.html',
    styleUrls: ['./recmPop.component.scss']
})

export class RecmPopComponent implements OnInit {
    private imgs;
    private curSuspension;
    private ctrlSuspensionShow = false;
    private moveIndex = 0;
    private imgsLen;
    private pages;

    constructor(
        private router: Router,
        private getDom: GetDomService
    ) { }

    @Input() set recmPopDatas(data: any) {
        if (data) {
            this.imgs = data['recmPopImg']['imgSrc'];

            this.imgsLen = this.imgs['length'];
            this.pages = Math.floor(this.imgsLen / 5);
            // console.log(this.imgs);
        }
    }

    ngOnInit() {

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

        // EventService.emit('showHomeSuspension', susObj);
    }

    hideHomeDetail(recmVodData, index, event) {
        this.ctrlSuspensionShow = false;
        // EventService.emit('hideHomeSuspension');
    }

    jumpToVodDetail(imgInfo, i) {
        let to = i + 1;
        this.router.navigate(['/vod/vodDetail', to]);
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
