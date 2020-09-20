import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaginationModel } from 'src/app/models/pagination.model';
import { ProductModel } from 'src/app/models/product.model';
import { ProductStoreActions, ProductStoreSelectors, RootStoreState } from 'src/app/_root-store';
import { DialogComponent } from '../dialog-component/dialog-component.component';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
    public allProductsSelector$: Observable<ProductModel[]> = this.store.select(ProductStoreSelectors.getAllProductsEntitiesSelector);
    public productsCountSelector$: Observable<any> = this.store.select(ProductStoreSelectors.getProductsCountSelector);
    public columnsChoice = new FormControl(['id', 'name', 'description']);
    public columnsList: string[] = ['id', 'name', 'description', 'productNo', 'accountId'];
    public displayedColumns = ['id', 'name', 'description'];
    public appliedFilter: string = '';
    public paginationSetting: PaginationModel = {
        page: 1,
        pageSize: 10,
        sortProperty: 'name',
        sortDirection: 'asc'
    };

    @ViewChild(MatTable)
    table;

    /**
     * @param  {Store<RootStoreState.State>} privatestore Rootstore
     * @param  {MatDialog} privatedialog MatDialog service
     */
    constructor(
        private store: Store<RootStoreState.State>,
        private dialog: MatDialog) { }

    /**
     * @param  {} event select option event
     * @returns void
     */
    public onOptionsSelected(event): void {
        this.displayedColumns = event.value;
    }
    /**
     * @param  {number} currentPage which page need to open
     * @returns void
     */
    public loadProducts(currentPage: number): void {
        this.paginationSetting = {
            ...this.paginationSetting,
            page: currentPage
        };

        this.store.dispatch(new ProductStoreActions.LoadProduct(this.paginationSetting));
    }
    /**
     * @param  {string} filterValue value of the search field
     */
    public filterTable(filterValue: string): void {
        this.appliedFilter = filterValue;
        if (filterValue.length > 0) {
            this.allProductsSelector$ = this.allProductsSelector$.pipe(map(
                (products) => products.filter(product => product.name.toLowerCase().indexOf(filterValue.trim().toLowerCase()) > -1))
            );
        } else {
            this.allProductsSelector$ = this.store.select(ProductStoreSelectors.getAllProductsEntitiesSelector);
        }
    }
    /**
     * @param  {MatSort} sort sort object from mat-sort
     * @returns void
     */
    public sortProducts(sort: MatSort): void {
        this.paginationSetting = {
            ...this.paginationSetting,
            sortProperty: sort.active,
            sortDirection: sort.direction
        };

        this.loadProducts(this.paginationSetting.page);
    }
    /**
     * @returns void
     */
    openDialog(): void {
        const dialogRef = this.dialog.open(DialogComponent, {
            data: {
                message: 'Add new product',
                modelType: 'product',
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
        this.loadProducts(1);
    }
}
