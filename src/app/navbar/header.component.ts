import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from '../commonService/event.service';
import { LoginService } from '../login/login.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    public judgeLogin = true;
    constructor(
        public loginService: LoginService,
        private router: Router
    ) { }

    ngOnInit() {
        EventService.on('HIDE_LOGIN_TITLE', () => {
            this.judgeLogin = false;
        });
    }

    login() {
        EventService.emit('SHOW_LOGIN');
    }
    logOut() {
        this.loginService.ctrlLogin = false;
        this.judgeLogin = true;
        this.router.navigate(['/home']);
    }
}
