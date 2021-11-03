import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscriber } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';

export enum ELang {
    en,
    ua,
    ru
}

@Injectable({
    providedIn: 'root'
})
export class LangService {
    public currentLang = new BehaviorSubject<ELang>(this.getBrowserLang());

    constructor() {}

    getBrowserLang() {
        console.log('get browser lang');

        let lang: ELang;
        switch (navigator.language) {
            case 'ru':
                lang = ELang.ru;
                break;
            case 'ua':
                lang = ELang.ua;
                break;
            default:
                lang = ELang.en;
                break;
        }
        return lang;
    }
}
