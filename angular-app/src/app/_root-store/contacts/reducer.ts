import * as ContactsActions from './actions';
import { ContactsState, InitialState } from './state';

export function ContactsReducer(state: ContactsState = InitialState, action: ContactsActions.ContactsActions): ContactsState {
    switch (action.type) {
        case ContactsActions.ContactsType.LOAD_CONTACTS: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        case ContactsActions.ContactsType.LOAD_CONTACTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                items: action.payload
            };
        }
        case ContactsActions.ContactsType.LOAD_CONTACTS_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        }
        case ContactsActions.ContactsType.RESET_STORE: {
            return {
                ...InitialState
            };
        }
        default:
        return state;
    }
}
