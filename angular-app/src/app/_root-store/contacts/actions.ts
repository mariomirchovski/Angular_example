import { Action } from '@ngrx/store';
import { ResponseData } from 'src/app/core/services/config';
import { PaginationModel } from 'src/app/models/pagination.model';

export enum ContactsType {
    LOAD_CONTACTS = '[CONTACTS] Load contacts',
    LOAD_CONTACTS_SUCCESS = '[CONTACTS] Load contacts Success',
    LOAD_CONTACTS_FAIL = '[CONTACTS] contacts Fail',
    ADD_CONTACT = '[CONTACT] add contact',
    ADD_CONTACT_SUCCESS = '[CONTACT] add contact success',
    ADD_CONTACT_FAIL = '[CONTACT] add contact Fail',
    RESET_STORE = '[CONTACT] Reset Store',
}

export class LoadContacts implements Action {
    readonly type = ContactsType.LOAD_CONTACTS;

    constructor(public payload: PaginationModel) { }
}

export class LoadContactsSuccess implements Action {
    readonly type = ContactsType.LOAD_CONTACTS_SUCCESS;

    constructor(public payload: ResponseData) { }
}

export class LoadContactsFail implements Action {
    readonly type = ContactsType.LOAD_CONTACTS_FAIL;

    constructor(public payload: any) { }
}

export class AddContact implements Action {
    readonly type = ContactsType.ADD_CONTACT;

    constructor(public payload: any) { }
}

export class AddContactSuccess implements Action {
    readonly type = ContactsType.ADD_CONTACT_SUCCESS;

    constructor(public payload: any) { }
}

export class ResetStore implements Action {
    readonly type = ContactsType.RESET_STORE;

    constructor() { }
}

export type ContactsActions = LoadContacts
    | LoadContactsSuccess
    | LoadContactsFail
    | AddContact
    | AddContactSuccess
    | ResetStore
    ;
