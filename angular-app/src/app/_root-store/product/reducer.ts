import * as ProductActions from './actions';
import { InitialState, ProductState } from './state';

export function ProductReducer(state: ProductState = InitialState, action: ProductActions.ProductActions): ProductState {
    switch (action.type) {
        case ProductActions.ProductType.LOAD_PRODUCT: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }

        case ProductActions.ProductType.LOAD_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                items: action.payload.products,
                meta: action.payload.meta
            };
        }

        case ProductActions.ProductType.LOAD_PRODUCT_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        }

        case ProductActions.ProductType.ADD_PRODUCT: {
            return {
                ...state,
                loading: false
            };
        }

        case ProductActions.ProductType.ADD_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                items: action.payload.products,
                error: action.payload.error
            };
        }

        case ProductActions.ProductType.RESET_STORE: {
            return {
                ...InitialState
            };
        }

        default:
            return state;
    }
}
