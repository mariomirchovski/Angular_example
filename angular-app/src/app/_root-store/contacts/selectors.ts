import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContactsState } from './state';

const getAllContacts = (state: ContactsState) => state.items;
const getContactsState = createFeatureSelector<ContactsState>('contacts');

export const getAllContactsEntitiesSelector = createSelector(getContactsState, getAllContacts);
