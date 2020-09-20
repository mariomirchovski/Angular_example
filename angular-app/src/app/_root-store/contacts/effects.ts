import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ResponseData } from 'src/app/core/services/config';
import * as ErrorActions from '../errors/actions';
import { ErrorState } from '../errors/state';
import { ContactsService } from './../../core/services/contacts.service';
import * as ContactsActions from './actions';

@Injectable()
export class ContactsEffects {
    constructor(
        private actions$: Actions,
        private contactsService: ContactsService,
    ) { }

    @Effect()
    public loadContacts$: Observable<ContactsActions.LoadContactsSuccess | ErrorActions.ErrorAction> = this.actions$.pipe(
        ofType(ContactsActions.ContactsType.LOAD_CONTACTS),
        switchMap((action: any) => {
            return this.contactsService.getContacts(action.payload)
                .pipe(
                    map((AllData: ResponseData) => {
                        return new ContactsActions.LoadContactsSuccess(AllData);
                    }),
                    catchError(err => {
                        const error: ErrorState = {
                            type: 1,
                            message: err.message ? err.message : 'Ops! Something went wrong!'
                        };

                        return of(new ErrorActions.ErrorAction(error));
                    })
                );
        })
    );

    @Effect()
    public addContact$: Observable<Action[] | ErrorActions.ErrorAction> = this.actions$.pipe(
        ofType(ContactsActions.ContactsType.ADD_CONTACT),
        switchMap((action: any) => {
            return this.contactsService.addContact(action.payload)
                .pipe(
                    map((AllData: ResponseData) => {
                        const error: ErrorState = {
                            type: 0,
                            message: 'Product successfully added!'
                        };

                        const arrayOfActions: Action[] = [
                            new ErrorActions.ErrorAction(error),
                            new ContactsActions.AddContactSuccess(AllData)
                        ];

                        return arrayOfActions;
                    }),
                    catchError(err => {
                        const error: ErrorState = {
                            type: 1,
                            message: err.message ? err.message : 'Ops! Something went wrong!'
                        };

                        return of(new ErrorActions.ErrorAction(error));
                    })
                );
        })
    );
}
