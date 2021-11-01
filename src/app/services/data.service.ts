import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { CardModel } from 'src/app/models/card.model';
import { GoogleService } from './google.service';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private _externCards: any;
    private _externLayout: any;

    constructor(private googleSrv: GoogleService) {}

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
        return this._externLayout
            ? of(this._externLayout)
            : this.googleSrv
                  .getLayoutData()
                  .pipe(map((x) => (this._externLayout = x)));
    }
}
