import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestHelper } from './config';

@Injectable({
    providedIn: 'root',
})

export class ContactsService {
    constructor(private http: HttpClient) { }

    getContacts(): Observable<any> {
        return RequestHelper.get(this.http, '/contacts');
    }
}
