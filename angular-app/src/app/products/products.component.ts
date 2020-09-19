import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { ProductStoreActions, ProductStoreSelectors, RootStoreState } from 'src/app/_root-store';

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
    public currentPage = 1;
    public pageSize = 10;
    public sortProperty = 'name';
    public sortDirection = 'asc';

    constructor(private store: Store<RootStoreState.State>) { }

    public onOptionsSelected(event) {
        this.displayedColumns = event.value;
    }

    public loadProducts(page) {
        this.currentPage = page;

        this.store.dispatch(new ProductStoreActions.LoadProduct({
            page: page, pageSize: this.pageSize, sortProperty: this.sortProperty, sortDirection: this.sortDirection
        }));
    }

    public sortProducts(sort: MatSort) {
        this.sortProperty = sort.active;
        this.sortDirection = sort.direction;

        this.loadProducts(this.currentPage);
    }

    ngOnInit(): void {
        this.loadProducts(this.currentPage);
    }
}
