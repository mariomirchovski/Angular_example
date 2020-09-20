
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrganizationState } from './state';

const getOrganization = (state: OrganizationState) => state.organizationId;
const getOrganizationState = createFeatureSelector<OrganizationState>('organization');

export const getOrganizationSelector = createSelector(getOrganizationState, getOrganization);
