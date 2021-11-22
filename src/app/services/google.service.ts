import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GoogleService {
    //https://sheets.googleapis.com/v4/spreadsheets/1oL66ymKTZNEFBCIF3Zkd4oZRjEbNymxHOgGjmER67N0/values/layout!A1:F100?key=AIzaSyBkdiuCI3ThuWIR7OrmQFGoEaAgx1LaYRU
    private readonly id = '1oL66ymKTZNEFBCIF3Zkd4oZRjEbNymxHOgGjmER67N0';
    private readonly listLayoutName = 'layout';
    private readonly cardsName = 'data';
    private readonly key = 'AIzaSyBkdiuCI3ThuWIR7OrmQFGoEaAgx1LaYRU';
    constructor(private http: HttpClient) {}

    private getLink(id: string, listName: string, key: string): string {
        return `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${listName}!A1:F100?key=${key}`;
    }

    getLayoutData(): Observable<any> {
        return this.http.get(
            this.getLink(this.id, this.listLayoutName, this.key)
        );
    }

    getCardsData(): Observable<any> {
        return this.http.get(this.getLink(this.id, this.cardsName, this.key));
    }
}
