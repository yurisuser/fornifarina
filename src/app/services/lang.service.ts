import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum ELang {
    en,
    ua,
    ru
}

@Injectable({
    providedIn: 'root'
})
export class LangService {
    public currentLang: Subject<ELang> = new Subject<ELang>();

    constructor() {}

    getBrowserLang() {
        let lang = ELang.en;
        switch (navigator.language) {
            case 'ru':
                lang = ELang.ru;
                break;
            case 'ua':
                lang = ELang.ua;
                break;
            case 'en':
                lang = ELang.en;
                break;
            default:
                break;
        }
        this.setLang(lang);
    }

    setLang(lang: ELang) {
        console.log(lang);

        this.currentLang.next(lang);
    }
}
