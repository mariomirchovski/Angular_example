import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestHelper, ResponseData } from './config';

@Injectable({
    providedIn: 'root',
})

export class ProductService {
    constructor(private http: HttpClient) { }

    getAll(payload): Observable<ResponseData> {
        let sort = '';
        if (payload.sortProperty) {
            sort = `&sortProperty=${payload.sortProperty}&sortDirection=${payload.sortDirection}`;
        }

        return RequestHelper.get(this.http, `/products?page=${payload.page}&pageSize=${payload.pageSize}${sort}`);
    }

    addProduct(payload): Observable<any> {
        console.trace("ADD PROD")
        return RequestHelper.post(this.http, `/products`, payload);
    }
}
