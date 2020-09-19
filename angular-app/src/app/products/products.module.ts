import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
// import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ProductsComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ProductsRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatSelectModule
    ]
})
export class ProductsModule { }
