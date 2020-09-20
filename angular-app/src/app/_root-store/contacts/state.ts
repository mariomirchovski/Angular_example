import { ContactsModel } from './../../models/contacts.model';

export interface ContactsState {
    items: ContactsModel[];
    meta: any;
    loading: boolean;
}

export const InitialState: ContactsState = {
    items: null,
    meta: {},
    loading: false
};
