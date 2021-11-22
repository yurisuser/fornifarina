import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';
import { LangService } from 'src/app/services/lang.service';

import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    cards: CardModel[] = [];
    layoutData: any;
    currLang$: any;

    constructor(private dataSrv: DataService, private langSrv: LangService) {}

    ngOnInit(): void {
        this.currLang$ = this.langSrv.currentLang;
        this.dataSrv.getCards().subscribe((x) => (this.cards = x));
        this.dataSrv.getLayout().subscribe((x) => {
            this.layoutData = x;
        });
    }
}
