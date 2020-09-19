import { Component, OnInit } from '@angular/core';
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
  public allProductsSelector$: Observable<ProductModel[]> =  this.store.select(ProductStoreSelectors.getAllProductsEntitiesSelector)
  constructor(private store: Store<RootStoreState.State>) { }

  ngOnInit(): void {
    this.store.dispatch(new ProductStoreActions.LoadProduct())
  }

}
