import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';

import { DataService } from '../services/data.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    cards: CardModel[] = [];
    constructor(private dataSrv: DataService) {}

    ngOnInit(): void {
        this.dataSrv.getCards().subscribe((x) => (this.cards = x));
    }
}
