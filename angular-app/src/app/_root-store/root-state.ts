
import { ContactsStoreState } from './contacts';
import { ErrorStoreState } from './errors';
import { OrganizationStoreState } from './organization';
import { ProductStoreState } from './product';

export interface State {
    product: ProductStoreState.ProductState;
    contacts: ContactsStoreState.ContactsState;
    organization: OrganizationStoreState.OrganizationState;
    error: ErrorStoreState.ErrorState;
}
