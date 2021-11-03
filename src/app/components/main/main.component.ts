import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';

import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    cards: CardModel[] = [];
    data: any;

    constructor(private dataSrv: DataService) {}

    ngOnInit(): void {
        this.dataSrv.getCardsTest().subscribe((x) => (this.cards = x));
        this.dataSrv.getLayout().subscribe((x) => {
            this.data = x;
        });
    }

    getStringById(id: any) {
        let a = this.data.find((s: any) => s.id == id).value;
        return a;
    }
}
