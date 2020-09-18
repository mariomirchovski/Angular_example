import { Action } from '@ngrx/store';
export enum ProductType {
    LOAD_PRODUCT = '[PRODUCT] Load PRODUCT',
    LOAD_PRODUCT_SUCCESS = '[PRODUCT] Load PRODUCT Success',
    PRODUCT_FAIL = 'PRODUCT] PRODUCT Fail',
    RESET_STORE = '[PRODUCT] Reset Store',
}

export class LoadProduct implements Action {
    readonly type = ProductType.LOAD_PRODUCT;

    constructor(public payload: any) { }
}

export class LoadProductSuccess implements Action {
    readonly type = ProductType.LOAD_PRODUCT_SUCCESS;

    constructor(public payload: any) { }
}

export class ProductFail implements Action {
    readonly type = ProductType.PRODUCT_FAIL;
}

export class ResetStore implements Action {
    readonly type = ProductType.RESET_STORE;

    constructor() { }
}

export type ProductActions = LoadProduct
    | LoadProductSuccess
    | ProductFail
    | LoadProduct
    | ResetStore
    ;
