import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestHelper } from './config';

@Injectable({
    providedIn: 'root',
})

export class OrganizationService {
    constructor(private http: HttpClient) { }

    getOrganizationId(): Observable<any> {
        return RequestHelper.get(this.http, `/organization`);
    }
}
