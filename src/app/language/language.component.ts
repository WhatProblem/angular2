import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';


@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.scss']
})

export class LanguageComponent implements OnInit {
    public ctrlLanguage = '0';

    constructor(public translate: TranslateService) { }

    ngOnInit() {
        this.translate.setDefaultLang('en');
    }

    changeLanguage() {
        if (this.ctrlLanguage === '0') {
            this.translate.use('zh');
            this.ctrlLanguage = '1';
            return;
        }
        if (this.ctrlLanguage === '1') {
            this.translate.use('en');
            this.ctrlLanguage = '0';
            return;
        }
    }
}
