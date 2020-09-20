import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OrganizationStoreActions, RootStoreState } from 'src/app/_root-store';
import { MatSnackBar } from '@angular/material/snack-bar'
import { ErrorTypeEnum } from './enums/error.enum';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'angular-app';
    snackBarMode = 'success'
    constructor(
        private store: Store<RootStoreState.State>,
        private snackbar: MatSnackBar) { }

    ngOnInit(): void {
        this.store.dispatch(new OrganizationStoreActions.LoadOrganization());

        this.store.select('error').subscribe(res => {
            if (res.type !== null && res.message.length > 0) {
                let snackbarMessage: string = res.message;
                let snackBarClass: string = res.type === ErrorTypeEnum.success ? 'mat-primary' : 'mat-warn';
                
                this.snackbar.open(snackbarMessage, '', {
                    duration: 2000,
                    panelClass: ['mat-toolbar', snackBarClass]
                })

            }
        })
    }
}
