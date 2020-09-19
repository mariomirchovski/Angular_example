import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { ProductService } from './../../core/services/product.service';
import { RootStoreState } from './../index';
import * as ProductActions from './actions';
import { from, Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, take } from 'rxjs/operators';

@Injectable()
export class ProductEffects {

    // private messageTime = 5000;
    constructor(
        private actions$: Actions,
        private productService: ProductService,
        private store$: Store<RootStoreState.State>,
    ) { }

    @Effect()
    public loadProduct$: Observable<ProductActions.LoadProductSuccess | ProductActions.LoadProductFail> = this.actions$.pipe(
        ofType(ProductActions.ProductType.LOAD_PRODUCT),
        map((action: ProductActions.LoadProduct) => {
            return action.payload;
        }),
        switchMap((productData) => {
            return this.productService.getAll(productData)
                .pipe(
                    map((AllData: /*ProguctAllData*/any) => {
                        return new ProductActions.LoadProductSuccess({...AllData});
                    }),
                    catchError(error => {
                        return of(new ProductActions.LoadProductFail({ error: Error }));
                    })
                );
        })
    );

}