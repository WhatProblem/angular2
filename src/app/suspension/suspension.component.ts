import { Component, OnInit } from '@angular/core';

import { SuspensionService } from './suspension.service';


@Component({
    selector: 'app-suspension',
    templateUrl: './suspension.component.html',
    styleUrls: ['./suspension.component.scss']
})

export class SuspensionComponent implements OnInit {
    private suspensionData;

    constructor(private suspension: SuspensionService) { }

    ngOnInit() {

    }
}
