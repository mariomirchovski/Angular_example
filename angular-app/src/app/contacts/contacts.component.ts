import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ContactsModel } from 'src/app/models/contacts.model';
import { PaginationModel } from 'src/app/models/pagination.model';
import { ContactsStoreActions, ContactsStoreSelectors, RootStoreState } from 'src/app/_root-store';
import { DialogComponent } from '../dialog-component/dialog-component.component';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {
    public allContactsSelector$: Observable<ContactsModel[]> = this.store.select(ContactsStoreSelectors.getAllContactsEntitiesSelector);
    public contactsCountSelector$: Observable<any> = this.store.select(ContactsStoreSelectors.getContactsCountSelector);

    constructor(
        private store: Store<RootStoreState.State>,
        private dialog: MatDialog) { }
    public displayedColumns = ['id', 'name', 'description'];

    public paginationSetting: PaginationModel = {
        page: 1,
        pageSize: 10,
        sortProperty: 'name',
        sortDirection: 'asc'
    };

    public loadContacts(page): void {
        this.paginationSetting.page = page;

        this.store.dispatch(new ContactsStoreActions.LoadContacts(this.paginationSetting));
    }

    public sortContacts(sort: MatSort): void {
        this.paginationSetting.sortProperty = sort.active;
        this.paginationSetting.sortDirection = sort.direction;

        this.loadContacts(this.paginationSetting.page);
    }

    openDialog() {
        const dialogRef = this.dialog.open(DialogComponent,{
            data:{
              message: 'Add new contact',
              modelType: 'contact',
              buttonText: {
                ok: 'Add',
                cancel: 'Close'
              }
            }
        });

        dialogRef.afterClosed().subscribe((confirmed: boolean) => {
            console.log('confirmed: ', confirmed);
        })
    }

    ngOnInit(): void {
        this.loadContacts(this.paginationSetting.page);
    }
}
