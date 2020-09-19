import { NgModule, NgZone } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ProductsComponent } from './product/products/products.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
