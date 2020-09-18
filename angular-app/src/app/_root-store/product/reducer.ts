import * as ProductActions from './actions';
import { ProductState, InitialState } from './state';

export function ProductReducer(state: ProductState = InitialState, action: ProductActions.ProductActions): ProductState {

    switch (action.type) {

        case ProductActions.ProductType.LOAD_PRODUCT: {
           
            return {
                ...state,
                // entities,
                // paygroup,
                // loading: true
            };
        }

        case ProductActions.ProductType.LOAD_PRODUCT_SUCCESS: {
           
            // if (action.payload.paygroupId === null && state.paygroup) {
            //     paygroup = state.paygroup.map(payGroup => {
            //         payGroup.selected = false;
            //         return payGroup;
            //     });
            // }

            // if (action.payload.page !== 1) {
            //     entities = state.entities;
            // }

            return {
                ...state,
                // entities,
                // paygroup,
                // loading: true
            };
        }

        case ProductActions.ProductType.PRODUCT_FAIL: {
           
            // if (action.payload.paygroupId === null && state.paygroup) {
            //     paygroup = state.paygroup.map(payGroup => {
            //         payGroup.selected = false;
            //         return payGroup;
            //     });
            // }

            // if (action.payload.page !== 1) {
            //     entities = state.entities;
            // }

            return {
                ...state,
                // entities,
                // paygroup,
                // loading: true
            };
        }

        case ProductActions.ProductType.RESET_STORE: {

            return {
                ...InitialState
            };
        }

        default: 
        return state
    }
}
