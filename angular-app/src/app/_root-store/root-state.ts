
import { ContactsStoreState } from './contacts';
import { ProductStoreState } from './product';

export interface State {
    product: ProductStoreState.ProductState;
    contacts: ContactsStoreState.ContactsState;
}
