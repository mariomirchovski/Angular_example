import { NgModule, NgZone } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ProductsComponent } from './product/products/products.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [ProductsComponent],
  exports: [RouterModule]
})
export class AppRoutingModule {}
