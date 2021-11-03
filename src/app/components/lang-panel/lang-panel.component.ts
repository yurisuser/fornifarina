import { Component, OnInit } from '@angular/core';

import { ELang, LangService } from 'src/app/services/lang.service';

@Component({
    selector: 'app-lang-panel',
    templateUrl: './lang-panel.component.html',
    styleUrls: ['./lang-panel.component.scss']
})
export class LangPanelComponent implements OnInit {
    flags = ['en', 'ua', 'ru'];
    mainFlag = 'en';
    a = '../../../assets/pic/flags/mainFlag.svg';

    constructor(private langSrv: LangService) {}

    ngOnInit(): void {}

    onClick(flag: string) {
        this.mainFlag = flag;
        this.langSrv.currentLang.next(ELang[flag as keyof typeof ELang]);
        //https://stackoverflow.com/questions/17380845/how-do-i-convert-a-string-to-enum-in-typescript
    }

    getLink() {
        return `../../../assets/pic/flags/${this.mainFlag}.svg`;
    }
}
