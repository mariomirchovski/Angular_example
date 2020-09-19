import { Component, OnInit } from '@angular/core';
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
  public allProductsSelector$: Observable<ProductModel[]> = this.store.select(ProductStoreSelectors.getAllProductsEntitiesSelector)
  public productsCountSelector$: Observable<any> = this.store.select(ProductStoreSelectors.getProductsCountSelector)

  constructor(private store: Store<RootStoreState.State>) { }
  public displayedColumns = ['id', 'name','description']
  public currentPage = 1
  public pageSize = 10

  public loadProducts(page, sortProperty = 'name', sortDirection = '') {
    this.store.dispatch(new ProductStoreActions.LoadProduct({ page: page, pageSize: this.pageSize, sortProperty: sortProperty, sortDirection: sortDirection}))
  }

  public sortProducts(sort: MatSort) {
    console.log(sort)
    this.loadProducts(this.currentPage, sort.active, sort.direction)
  }

  ngOnInit(): void {
    this.loadProducts(this.currentPage)
  }

}
