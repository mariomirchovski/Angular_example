import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'https://api.billysbilling.com/v2/';
const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Access-Token': '749f6c0f873eb98f16257eec9baa47c944617d34',
});

@Injectable({
    providedIn: 'root',
})

export class ProductService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<any> {
        return this.http.get<any>(API + `organization`, {
            observe: 'body',
            headers: headers
        });
    }
}
