import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { ProductService } from './../../core/services/product.service';
import { RootStoreState } from './../index';
import * as ProductActions from './actions';
import { from, Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, take } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ResponseData } from 'src/app/core/services/config';

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
}
