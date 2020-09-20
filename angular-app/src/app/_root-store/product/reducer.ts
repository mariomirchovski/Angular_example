import * as ProductActions from './actions';
import { InitialState, ProductState } from './state';

export function ProductReducer(state: ProductState = InitialState, action: ProductActions.ProductActions): ProductState {
    switch (action.type) {
        case ProductActions.ProductType.LOAD_PRODUCT: {
            return {
                ...state,
                loading: true,
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

        case ProductActions.ProductType.ADD_PRODUCT: {
            return {
                ...state,
                loading: false
            };
        }

        case ProductActions.ProductType.ADD_PRODUCT_SUCCESS: {
            const allEntities = [...action.payload.products, ...state.items];

            return {
                ...state,
                loading: false,
                items: allEntities,
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
