export interface OrganizationState {
    organizationId: string;
    error: any;
}

export const InitialState: OrganizationState = {
    organizationId: '',
    error: null
};
