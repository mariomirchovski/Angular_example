import { ProductModel } from './../../models/product.model'
export interface ProductState {
    items: ProductModel[];
    loading: boolean;
    error: any;
}

export const InitialState: ProductState = {
    items: [],
    loading: false,
    error: null
};
