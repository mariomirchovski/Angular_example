import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContactsState } from './state';

const getAllContacts = (state: ContactsState) => state.items;
const getProductsCount = (state: ContactsState) => state.meta?.paging?.total;
const getContactsState = createFeatureSelector<ContactsState>('contacts');

export const getAllContactsEntitiesSelector = createSelector(getContactsState, getAllContacts);
export const getContactsCountSelector = createSelector(getContactsState, getProductsCount);
