import * as ErrorActions from './actions';
import { ErrorState, InitialState } from './state';

export function ErrorReducer(state: ErrorState = InitialState, action: ErrorActions.ErrorActions): ErrorState {
    switch (action.type) {
        case ErrorActions.ErrorType.ERROR_ACTION: {
            return {
                ...state,
                type: action.payload.type,
                message: action.payload.message
            };
        }

        default:
            return state;
    }
}
