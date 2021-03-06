import * as ContactsActions from './actions';
import { ContactsState, InitialState } from './state';

export function ContactsReducer(state: ContactsState = InitialState, action: ContactsActions.ContactsActions): ContactsState {
    switch (action.type) {
        case ContactsActions.ContactsType.LOAD_CONTACTS: {
            return {
                ...state,
                loading: true
            };
        }

        case ContactsActions.ContactsType.LOAD_CONTACTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                items: action.payload.contacts,
                meta: action.payload.meta
            };
        }

        case ContactsActions.ContactsType.ADD_CONTACT: {
            return {
                ...state,
                loading: false
            };
        }

        case ContactsActions.ContactsType.ADD_CONTACT_SUCCESS: {
            const allEntities = [...action.payload.contacts, ...state.items];

            return {
                ...state,
                loading: false,
                items: allEntities
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
