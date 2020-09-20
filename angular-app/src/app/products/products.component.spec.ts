import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { DialogComponent } from '../dialog-component/dialog-component.component';
import { RootStoreModule } from '../_root-store';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent, DialogComponent ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ProductsRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        RootStoreModule,
        BrowserAnimationsModule,
        MatDialogModule,
        HttpClientModule,
        MatSortModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
