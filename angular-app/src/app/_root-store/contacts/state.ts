import { ContactsModel } from './../../models/contacts.model';

export interface ContactsState {
    items: ContactsModel[];
    meta: any;
    loading: boolean;
    error: any;
}

export const InitialState: ContactsState = {
    items: [],
    meta: {},
    loading: false,
    error: null
};
