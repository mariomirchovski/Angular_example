import { Action } from '@ngrx/store';

export enum OrganizationType {
    LOAD_ORGANIZATION = '[ORGANIZATION] Load organization',
    LOAD_ORGANIZATION_SUCCESS = '[ORGANIZATION] Load organization Success',
    LOAD_ORGANIZATION_FAIL = '[ORGANIZATION] organization Fail',
    RESET_STORE = '[ORGANIZATION] Reset Store',
}

export class LoadOrganization implements Action {
    readonly type = OrganizationType.LOAD_ORGANIZATION;

    constructor() { }
}

export class LoadOrganizationSuccess implements Action {
    readonly type = OrganizationType.LOAD_ORGANIZATION_SUCCESS;

    constructor(public payload: any) { }
}

export class LoadOrganizationFail implements Action {
    readonly type = OrganizationType.LOAD_ORGANIZATION_FAIL;

    constructor(public payload: any) { }
}

export type OrganizationActions = LoadOrganization
    | LoadOrganizationSuccess
    | LoadOrganizationFail
    ;
