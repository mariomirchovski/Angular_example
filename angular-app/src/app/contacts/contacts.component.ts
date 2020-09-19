import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ContactsModel } from 'src/app/models/contacts.model';
import { ContactsStoreActions, ContactsStoreSelectors, RootStoreState } from 'src/app/_root-store';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public allContactsSelector$: Observable<ContactsModel[]> =  this.store.select(ContactsStoreSelectors.getAllContactsEntitiesSelector);

  constructor(private store: Store<RootStoreState.State>) { }

  ngOnInit(): void {
    this.store.dispatch(new ContactsStoreActions.LoadContacts());
  }

}
