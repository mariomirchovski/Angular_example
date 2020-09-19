import * as OrganizationActions from './actions';
import { InitialState, OrganizationState } from './state';

export function OrganizationReducer(state: OrganizationState = InitialState,
    action: OrganizationActions.OrganizationActions): OrganizationState {
    switch (action.type) {
        case OrganizationActions.OrganizationType.LOAD_ORGANIZATION: {
            return {
                ...state,
            };
        }

        case OrganizationActions.OrganizationType.LOAD_ORGANIZATION_SUCCESS: {
            return {
                ...state,
                organizationId: action.payload
            };
        }

        case OrganizationActions.OrganizationType.LOAD_ORGANIZATION_FAIL: {
            return {
                ...state,
                error: action.payload.error
            };
        }

        case OrganizationActions.OrganizationType.RESET_STORE: {
            return {
                ...InitialState
            };
        }
        default:
            return state;
    }
}
