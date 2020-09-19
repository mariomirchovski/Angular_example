import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OrganizationStoreActions, RootStoreState } from 'src/app/_root-store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'angular-app';
    constructor(private store: Store<RootStoreState.State>) { }

    ngOnInit(): void {
        this.store.dispatch(new OrganizationStoreActions.LoadOrganization());
    }
}
