import { Action } from '@ngrx/store';
import { ContactsModel } from 'src/app/models/contacts.model';

export enum ContactsType {
    LOAD_CONTACTS = '[CONTACTS] Load contacts',
    LOAD_CONTACTS_SUCCESS = '[CONTACTS] Load contacts Success',
    LOAD_CONTACTS_FAIL = '[CONTACTS] contacts Fail',
    RESET_STORE = '[CONTACTS] Reset Store',
}

export class LoadContacts implements Action {
    readonly type = ContactsType.LOAD_CONTACTS;

    constructor() { }
}

export class LoadContactsSuccess implements Action {
    readonly type = ContactsType.LOAD_CONTACTS_SUCCESS;

    constructor(public payload: ContactsModel[]) { }
}

export class LoadContactsFail implements Action {
    readonly type = ContactsType.LOAD_CONTACTS_FAIL;

    constructor(public payload: any) { }
}

export class ResetStore implements Action {
    readonly type = ContactsType.RESET_STORE;

    constructor() { }
}

export type ContactsActions = LoadContacts
    | LoadContactsSuccess
    | LoadContactsFail
    | ResetStore
    ;
