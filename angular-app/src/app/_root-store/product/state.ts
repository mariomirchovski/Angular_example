import { ProductModel } from './../../models/product.model';
export interface ProductState {
    items: ProductModel[];
    meta: any;
    loading: boolean;
}

export const InitialState: ProductState = {
    items: null,
    meta: {},
    loading: false
};
