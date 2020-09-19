import { NgModule, NgZone } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', component: ProductsComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
