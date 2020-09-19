import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestHelper, ResponseData } from './config'

@Injectable({
    providedIn: 'root',
})

export class ProductService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<ResponseData> {
        return RequestHelper.get(this.http, '/products')
    }
}
