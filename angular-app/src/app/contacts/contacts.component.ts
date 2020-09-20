import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContactsModel } from 'src/app/models/contacts.model';
import { ContactsStoreActions, ContactsStoreSelectors, RootStoreState } from 'src/app/_root-store';
import { DialogComponent } from '../dialog-component/dialog-component.component';
import { DialogModeEnum } from '../enums/dialog.enum';
import { PaginationModel } from '../models/pagination.model';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {
    public allContactsSelector$: Observable<ContactsModel[]> = this.store.select(ContactsStoreSelectors.getAllContactsEntitiesSelector);
    public contactsCountSelector$: Observable<any> = this.store.select(ContactsStoreSelectors.getContactsCountSelector);
    public columnsChoice = new FormControl(['id', 'name', 'phone']);
    public columnsList: string[] = ['id', 'name', 'phone', 'type', 'zipcodeText'];
    public displayedColumns = ['id', 'name', 'phone'];
    public appliedFilter = '';
    public paginationSetting: PaginationModel = {
        page: 1,
        pageSize: 10,
        sortProperty: 'name',
        sortDirection: 'asc'
    };

    /**
     * @param  Store<RootStoreState.State> private store Rootstore
     * @param  MatDialog private dialog MatDialog service
     */
    constructor(
        private store: Store<RootStoreState.State>,
        private dialog: MatDialog) {
        if (localStorage.getItem('contactsColumns')) {
            this.columnsChoice = new FormControl(JSON.parse(localStorage.getItem('contactsColumns')));
            this.displayedColumns = JSON.parse(localStorage.getItem('contactsColumns'));
        }
    }

    /**
     * @param  event select option event
     * @returns void
     */
    public onOptionsSelected(event): void {
        this.displayedColumns = event.value;
        localStorage.setItem('contactsColumns', JSON.stringify(this.displayedColumns));
    }
    /**
     * @param  number currentPage which page need to open
     * @returns void
     */
    public loadContacts(currentPage: number): void {
        this.paginationSetting = {
            ...this.paginationSetting,
            page: currentPage
        };

        this.store.dispatch(new ContactsStoreActions.LoadContacts(this.paginationSetting));
    }
    /**
     * @param  string filterValue value of the search field
     */
    public filterTable(filterValue: string): void {
        this.appliedFilter = filterValue;
        if (filterValue.length > 0) {
            this.allContactsSelector$ = this.allContactsSelector$.pipe(map(
                (products) => products.filter(product => product.name.toLowerCase().indexOf(filterValue.trim().toLowerCase()) > -1))
            );
        } else {
            this.allContactsSelector$ = this.store.select(ContactsStoreSelectors.getAllContactsEntitiesSelector);
        }
    }
    /**
     * @param  MatSort sort sort object from mat-sort
     * @returns void
     */
    public sortContacts(sort: MatSort): void {
        this.paginationSetting = {
            ...this.paginationSetting,
            sortProperty: sort.active,
            sortDirection: sort.direction
        };

        this.loadContacts(this.paginationSetting.page);
    }
    /**
     * @returns void
     */
    openDialog(): void {
        const dialogRef = this.dialog.open(DialogComponent, {
            data: {
                message: 'Add new contact',
                modelType: DialogModeEnum.contact,
                buttonText: {
                    ok: 'Add',
                    cancel: 'Close'
                }
            }
        });

        dialogRef.afterClosed().subscribe((confirmed: boolean) => {
            console.log('confirmed: ', confirmed);
        });
    }
    /**
     * @returns void
     */
    ngOnInit(): void {
        this.loadContacts(this.paginationSetting.page);
    }
}
