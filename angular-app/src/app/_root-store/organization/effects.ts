import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { OrganizationService } from './../../core/services/organization.service';
import * as OrganizationActions from './actions';

@Injectable()
export class OrganizationEffects {
    constructor(
        private actions$: Actions,
        private organizationService: OrganizationService,
    ) { }

    @Effect()
    public loadOrganization$: Observable<OrganizationActions.LoadOrganizationSuccess |
        OrganizationActions.LoadOrganizationFail> = this.actions$.pipe(
            ofType(OrganizationActions.OrganizationType.LOAD_ORGANIZATION),
            switchMap(() => {
                return this.organizationService.getOrganizationId()
                    .pipe(
                        map((data) => {
                            return new OrganizationActions.LoadOrganizationSuccess(data);
                        }),
                        catchError(error => {
                            return of(new OrganizationActions.LoadOrganizationFail({ error: Error }));
                        })
                    );
            })
        );
}
