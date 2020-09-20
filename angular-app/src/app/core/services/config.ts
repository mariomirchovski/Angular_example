import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactsModel } from 'src/app/models/contacts.model';
import { ProductModel } from 'src/app/models/product.model';

const API = 'https://api.billysbilling.com/v2';
const headerOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Access-Token': '749f6c0f873eb98f16257eec9baa47c944617d34',
});

export interface ResponseData {
    meta: any;
    products?: ProductModel[];
    contacts?: ContactsModel[];
}

interface Request {
    get(http, url): Observable<ResponseData>;
    post(http, url, body): Observable<ResponseData>;
}

export const RequestHelper: Request = {
    get: (http, url) => {
        return http.get(API + url, {
            observe: 'body',
            headers: headerOptions
        });
    },
    post: (http, url, data) => {
        const options = { headers: headerOptions };
        return http.post(API + url, data, options);
    }
};
