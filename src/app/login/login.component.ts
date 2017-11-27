import { Component, OnInit } from '@angular/core';

import { EventService } from '../commonService/event.service';
import { LoginService } from './login.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {


    constructor(public loginService: LoginService) { }

    ngOnInit() {

    }

    login() {
        this.loginService.ctrlLogin = true;
        this.closeLogin();
        EventService.emit('HIDE_LOGIN_TITLE');
    }

    closeLogin() {
        EventService.emit('HIDE_LOGIN');
    }
}
