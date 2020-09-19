import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaginationModel } from 'src/app/models/pagination.model';
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

    constructor(private store: Store<RootStoreState.State>) { }
    public displayedColumns = ['id', 'name', 'description'];
    public paginationSetting: PaginationModel = {
        page: 1,
        pageSize: 10,
        sortProperty: 'name',
        sortDirection: 'asc'
    };

    public loadProducts(page): void {
        this.paginationSetting.page = page;

        this.store.dispatch(new ProductStoreActions.LoadProduct(this.paginationSetting));
    }

    public sortProducts(sort: MatSort): void {
        this.paginationSetting.sortProperty = sort.active;
        this.paginationSetting.sortDirection = sort.direction;

        this.loadProducts(this.paginationSetting.page);
    }

    ngOnInit(): void {
        this.loadProducts(this.paginationSetting.page);
    }
}
