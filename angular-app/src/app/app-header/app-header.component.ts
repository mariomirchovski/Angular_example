import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContactsStoreActions, ProductStoreActions, RootStoreState } from '../_root-store';
import { PaginationModel } from '../models/pagination.model';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss']
})

export class HeaderComponent implements OnInit {
    public paginationSetting: PaginationModel = {
        page: 1,
        pageSize: 10,
        sortProperty: 'name',
        sortDirection: 'asc'
    };
    
    constructor(private store: Store<RootStoreState.State>) { }

    ngOnInit(): void {}

    public loadData(): void {
        this.store.dispatch(new ProductStoreActions.LoadProduct(this.paginationSetting));
        this.store.dispatch(new ContactsStoreActions.LoadContacts(this.paginationSetting));
    }
}
