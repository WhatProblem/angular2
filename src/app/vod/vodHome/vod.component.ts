import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-vod',
    templateUrl: './vod.component.html',
    styleUrls: ['./vod.component.scss']
})

export class VodComponent implements OnInit {
//////////////////////////
    constructor() { }

    ngOnInit() {
        console.log('vod预加载');
    }
}
