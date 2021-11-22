import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { CardModel } from 'src/app/models/card.model';
import { GoogleService } from './google.service';
import { LangService } from './lang.service';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private _externLayout: any;
    private _externCards: any;

    constructor(
        private googleSrv: GoogleService,
        private langSrv: LangService
    ) {}

    getCardsTest(): Observable<CardModel[]> {
        let card = {
            id: 0,
            image: '../../../assets/pic/example.jpg',
            headText: 'stove or a cooker',
            shortText:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate soluta quisquam commodi iure ex vel, sed blanditiis voluptas nisi quo, delectus incidunt enim, nostrum a ad porro dolorem aliquam harum?'
        };
        return of(new Array(10).fill(card));
    }

    getCards(): Observable<any> {
        if (this._externCards) {
            return of(this._externCards);
        } else {
            return this.googleSrv
                .getCardsData()
                .pipe(switchMap((x) => this.parseCards(x.values)));
        }
    }

    getLayout(): Observable<any> {
        if (this._externLayout) {
            return of(this._externLayout);
        } else {
            return this.googleSrv
                .getLayoutData()
                .pipe(switchMap((x) => this.parseLayout(x.values)));
        }
    }

    private parseLayout(data: any): any {
        data.shift();
        let result = data.map(
            (x: any) => (x = { id: x[0], en: x[1], ua: x[2], ru: x[3] })
        );
        return this.langSrv.currentLang.pipe(
            map((l) => {
                return result.map((x: any) => ({ id: x.id, value: x[l] }));
            })
        );
    }

    private parseCards(data: any): any {
        data.shift();

        let result = data.map(
            (item: any) =>
                (item = {
                    id: item[0],
                    lang: item[1],
                    title: item[2],
                    description: item[3],
                    image: `assets/pic/stoves/${item[4]}`,
                    text: item[5]
                })
        );

        return this.langSrv.currentLang.pipe(
            map((l) => result.filter((x: CardModel) => x.lang === l))
        );
    }
}
