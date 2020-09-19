import { ProductModel } from './../../models/product.model'
export interface ProductState {
    items: ProductModel[];
    meta: any,
    loading: boolean;
    error: any;
}

export const InitialState: ProductState = {
    items: [],
    meta: {},
    loading: false,
    error: null
};
