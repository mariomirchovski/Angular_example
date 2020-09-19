import { ContactsModel } from './../../models/contacts.model';

export interface ContactsState {
    items: ContactsModel[];
    loading: boolean;
    error: any;
}

export const InitialState: ContactsState = {
    items: [],
    loading: false,
    error: null
};
