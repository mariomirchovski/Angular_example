import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ResponseData } from 'src/app/core/services/config';
import { ContactsService } from './../../core/services/contacts.service';
import * as ContactsActions from './actions';

@Injectable()
export class ContactsEffects {
    constructor(
        private actions$: Actions,
        private contactsService: ContactsService,
    ) { }

    @Effect()
    public loadContacts$: Observable<ContactsActions.LoadContactsSuccess | ContactsActions.LoadContactsFail> = this.actions$.pipe(
        ofType(ContactsActions.ContactsType.LOAD_CONTACTS),
        switchMap((action: any) => {
            return this.contactsService.getContacts(action.payload)
                .pipe(
                    map((AllData: ResponseData) => {
                        return new ContactsActions.LoadContactsSuccess(AllData);
                    }),
                    catchError(error => {
                        return of(new ContactsActions.LoadContactsFail({ error: Error }));
                    })
                );
        })
    );

    @Effect()
    public addContact$: Observable<ContactsActions.AddContactSuccess | ContactsActions.LoadContactsFail> = this.actions$.pipe(
        ofType(ContactsActions.ContactsType.ADD_CONTACT),
        switchMap((action: any) => {
            return this.contactsService.addContact(action.payload)
                .pipe(
                    map((AllData: ResponseData) => {
                        return new ContactsActions.AddContactSuccess(AllData);
                    }),
                    catchError(error => {
                        return of(new ContactsActions.LoadContactsFail({ error: Error }));
                    })
                );
        })
    );
}
