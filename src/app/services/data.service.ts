import { Injectable } from '@angular/core';
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
        console.log(data);

        return this.langSrv.currentLang.pipe(
            map((l) => {
                return data
                    .map((item: any) => {
                        return { id: item[0], value: item[l + 1] };
                    })
                    .splice(1, Infinity);
            })
        );
    }
}
