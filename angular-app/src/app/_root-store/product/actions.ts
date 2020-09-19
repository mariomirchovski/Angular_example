import { Action } from '@ngrx/store';
export enum ProductType {
    LOAD_PRODUCT = '[PRODUCT] Load PRODUCT',
    LOAD_PRODUCT_SUCCESS = '[PRODUCT] Load PRODUCT Success',
    LOAD_PRODUCT_FAIL = '[PRODUCT] PRODUCT Fail',
    RESET_STORE = '[PRODUCT] Reset Store',
}

export class LoadProduct implements Action {
    readonly type = ProductType.LOAD_PRODUCT;

    constructor() { }
}

export class LoadProductSuccess implements Action {
    readonly type = ProductType.LOAD_PRODUCT_SUCCESS;

    constructor(public payload: any) { }
}

export class LoadProductFail implements Action {
    readonly type = ProductType.LOAD_PRODUCT_FAIL;

    constructor(public payload: any ) { }
}

export class ResetStore implements Action {
    readonly type = ProductType.RESET_STORE;

    constructor() { }
}

export type ProductActions = LoadProduct
    | LoadProductSuccess
    | LoadProductFail
    | LoadProduct
    | ResetStore
    ;
