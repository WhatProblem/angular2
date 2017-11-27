import { Injectable } from '@angular/core';




@Injectable()
export class GetDomService {

    getClassDom(val: string) {
        return document.getElementsByClassName(val);
    }

    getIdDom(val: string) {
        return document.getElementById(val);
    }

    getTagDom(val: string) {
        return document.getElementsByTagName(val);
    }
}
