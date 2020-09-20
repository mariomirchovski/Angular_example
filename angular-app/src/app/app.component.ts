import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OrganizationStoreActions, RootStoreState } from 'src/app/_root-store';
import { MatSnackBar } from '@angular/material/snack-bar'

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

        // this.getErrorSelector$.subscribe(res => {
        //     console.log('res: ', res);
            
        //     let snackbarMessage: string = ` successfully added!`;
        //     let snackBarClass: string = this.snackBarMode === 'success' ? 'mat-primary' : 'mat-warn';
            
        //     this.snackbar.open(snackbarMessage, '', {
        //         duration: 2000,
        //         panelClass: ['mat-toolbar', snackBarClass]
        //     })
        // })
    }
}
