import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CardModel } from 'src/app/models/card.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor() {}

    getCards(): Observable<CardModel[]> {
        let card = {
            id: 0,
            image: '../../../assets/pic/example.jpg',
            headText: 'stove or a cooker',
            shortText:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate soluta quisquam commodi iure ex vel, sed blanditiis voluptas nisi quo, delectus incidunt enim, nostrum a ad porro dolorem aliquam harum?'
        };
        return of(new Array(10).fill(card));
    }
}
