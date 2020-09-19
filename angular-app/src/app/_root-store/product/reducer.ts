import * as ProductActions from './actions';
import { ProductState, InitialState } from './state';

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
                console.log("LOAD_PRODUCT_SUCCESS", action.payload)
            return {
                ...state,
                loading: false,
                items: action.payload
            };
        }
        case ProductActions.ProductType.LOAD_PRODUCT_FAIL: {
            return {
                ...state,
                loading: false,
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
