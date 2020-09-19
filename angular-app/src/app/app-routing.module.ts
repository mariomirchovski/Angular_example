import { NgModule, NgZone } from '@angular/core';
import { Routes, RouterModule, Router, PreloadAllModules } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,  {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
