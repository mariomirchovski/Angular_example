import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestHelper, ResponseData } from './config';

@Injectable({
    providedIn: 'root',
})

export class ContactsService {
    constructor(private http: HttpClient) { }

    getContacts(payload): Observable<ResponseData> {
        let sort = '';
        if (payload.sortProperty) {
            sort = `&sortProperty=${payload.sortProperty}&sortDirection=${payload.sortDirection}`;
        }

        return RequestHelper.get(this.http, `/contacts?page=${payload.page}&pageSize=${payload.pageSize}${sort}`);
    }

    addContact(payload): Observable<any> {
        return RequestHelper.post(this.http, `/contacts`, { contact: payload });
    }
}
