import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { ContactsService } from './../../core/services/contacts.service';
import { RootStoreState } from './../index';
import * as ContactsActions from './actions';
import { from, Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, take } from 'rxjs/operators';

@Injectable()
export class ContactsEffects {

    // private messageTime = 5000;
    constructor(
        private actions$: Actions,
        private contactsService: ContactsService,
        private store$: Store<RootStoreState.State>,
    ) { }

    @Effect()
    public loadContacts$: Observable<ContactsActions.LoadContactsSuccess | ContactsActions.LoadContactsFail> = this.actions$.pipe(
        ofType(ContactsActions.ContactsType.LOAD_CONTACTS),
        switchMap(() => {
            return this.contactsService.getContacts()
                .pipe(
                    map((AllData) => {
                        return new ContactsActions.LoadContactsSuccess(AllData.contacts);
                    }),
                    catchError(error => {
                        return of(new ContactsActions.LoadContactsFail({ error: Error }));
                    })
                );
        })
    );

}