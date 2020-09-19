
import { ContactsStoreState } from './contacts';
import { OrganizationStoreState } from './organization';
import { ProductStoreState } from './product';

export interface State {
    product: ProductStoreState.ProductState;
    contacts: ContactsStoreState.ContactsState;
    organization: OrganizationStoreState.OrganizationState;
}
