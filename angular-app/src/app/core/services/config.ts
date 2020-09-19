import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';

const API = 'https://api.billysbilling.com/v2';
const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Access-Token': '749f6c0f873eb98f16257eec9baa47c944617d34',
});

export interface ResponseData {
    meta: any,
    products?: Array<ProductModel>
}

interface Request {
    get(http, url): Observable<ResponseData>;
    post(http, url, body): Observable<ResponseData>;
}

export const RequestHelper:Request = {
    get: (http, url) => {
        return http.get(API + url, {
            observe: 'body',
            headers: headers
        });
    },
    post: (http, url, body) => {
        return http.post(API + url, {
            observe: 'body',
            body: body,
            headers: headers
        });
    }
}