import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ResponseData } from 'src/app/core/services/config';
import { ProductService } from './../../core/services/product.service';
import { RootStoreState } from './../index';
import * as ProductActions from './actions';

@Injectable()

export class ProductEffects {
    constructor(
        private actions$: Actions,
        private productService: ProductService,
        private store$: Store<RootStoreState.State>,
    ) { }

    @Effect()
    public loadProduct$: Observable<ProductActions.LoadProductSuccess | ProductActions.LoadProductFail> = this.actions$.pipe(
        ofType(ProductActions.ProductType.LOAD_PRODUCT),
        switchMap((action: any) => {
            return this.productService.getAll(action.payload)
                .pipe(
                    map((AllData: ResponseData) => {
                        return new ProductActions.LoadProductSuccess(AllData);
                    }),
                    catchError(err => {
                        return of(new ProductActions.LoadProductFail({ error: err }));
                    })
                );
        })
    );

    @Effect()
    public addProduct$: Observable<ProductActions.AddProductSuccess | ProductActions.LoadProductFail> = this.actions$.pipe(
        ofType(ProductActions.ProductType.LOAD_PRODUCT),
        switchMap((action: any) => {
            return this.productService.addProduct(action.payload)
                .pipe(
                    map((AllData: ResponseData) => {
                        return new ProductActions.AddProductSuccess(AllData);
                    }),
                    catchError(err => {
                        return of(new ProductActions.LoadProductFail({ error: err }));
                    })
                );
        })
    );
}
