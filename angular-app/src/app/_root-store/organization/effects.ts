import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as ErrorActions from '../errors/actions';
import { ErrorState } from '../errors/state';
import { OrganizationService } from './../../core/services/organization.service';
import * as OrganizationActions from './actions';

@Injectable()
export class OrganizationEffects {
    constructor(
        private actions$: Actions,
        private organizationService: OrganizationService,
    ) { }

    @Effect()
    public loadOrganization$: Observable<OrganizationActions.LoadOrganizationSuccess | ErrorActions.ErrorAction> = this.actions$.pipe(
        ofType(OrganizationActions.OrganizationType.LOAD_ORGANIZATION),
        switchMap(() => {
            return this.organizationService.getOrganizationId()
                .pipe(
                    map((data) => {
                        return new OrganizationActions.LoadOrganizationSuccess(data);
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
