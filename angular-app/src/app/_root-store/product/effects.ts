import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, mergeMap } from 'rxjs/operators';
import { ResponseData } from 'src/app/core/services/config';
import * as ErrorActions from '../errors/actions';
import { ErrorState } from '../errors/state';
import { ProductService } from './../../core/services/product.service';
import * as ProductActions from './actions';

@Injectable()

export class ProductEffects {
    constructor(
        private actions$: Actions,
        private productService: ProductService,
    ) { }

    @Effect()
    public loadProduct$: Observable<ProductActions.LoadProductSuccess | ErrorActions.ErrorAction> = this.actions$.pipe(
        ofType(ProductActions.ProductType.LOAD_PRODUCT),
        switchMap((action: any) => {
            return this.productService.getAll(action.payload)
                .pipe(
                    map((AllData: ResponseData) => {
                        return new ProductActions.LoadProductSuccess(AllData);
                    }),
                    catchError(err => {
                        const error: ErrorState = {
                            type: 1,
                            message: err.message ? err.message : 'Ops! Something went wrong!'
                        };

                        return of(new ErrorActions.ErrorAction(error));
                    })
                );
        })
    );

    @Effect()
    public addProduct$: Observable<ProductActions.AddProductSuccess | ErrorActions.ErrorAction> = this.actions$.pipe(
        ofType(ProductActions.ProductType.ADD_PRODUCT),
        switchMap((action: any) => {
            return this.productService.addProduct(action.payload)
                .pipe(
                    mergeMap((AllData: ResponseData) => {
                        const error: ErrorState = {
                            type: 0,
                            message: 'Product successfully added!'
                        };

                        return [
                            new ErrorActions.ErrorAction(error),
                            new ProductActions.AddProductSuccess(AllData)
                        ];
                    }),
                    catchError(err => {
                        const error: ErrorState = {
                            type: 1,
                            message: err.message ? err.message : 'Ops! Something went wrong!'
                        };

                        return of(new ErrorActions.ErrorAction(error));
                    })
                );
        })
    );
}
