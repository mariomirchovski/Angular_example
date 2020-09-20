import { Action } from '@ngrx/store';
import { ResponseData } from 'src/app/core/services/config';
import { AddProductModel } from 'src/app/models/addProduct.model';
import { PaginationModel } from 'src/app/models/pagination.model';

export enum ProductType {
    LOAD_PRODUCT = '[PRODUCT] Load PRODUCT',
    LOAD_PRODUCT_SUCCESS = '[PRODUCT] Load PRODUCT Success',
    ADD_PRODUCT = '[PRODUCT] add product',
    ADD_PRODUCT_SUCCESS = '[PRODUCT] add product success',
    RESET_STORE = '[PRODUCT] Reset Store',
}

export class LoadProduct implements Action {
    readonly type = ProductType.LOAD_PRODUCT;

    constructor(public payload: PaginationModel) { }
}

export class LoadProductSuccess implements Action {
    readonly type = ProductType.LOAD_PRODUCT_SUCCESS;

    constructor(public payload: ResponseData) { }
}

export class AddProduct implements Action {
    readonly type = ProductType.ADD_PRODUCT;

    constructor(public payload: AddProductModel) { }
}

export class AddProductSuccess implements Action {
    readonly type = ProductType.ADD_PRODUCT_SUCCESS;

    constructor(public payload: any) { }
}

export class ResetStore implements Action {
    readonly type = ProductType.RESET_STORE;

    constructor() { }
}

export type ProductActions = LoadProduct
    | LoadProductSuccess
    | AddProduct
    | AddProductSuccess
    | ResetStore
    ;
