import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';
import { DialogComponent } from '../dialog-component/dialog-component.component';
import { RootStoreModule } from '../_root-store';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ContactsComponent', () => {
    let component: ContactsComponent;
    let fixture: ComponentFixture<ContactsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ContactsComponent, DialogComponent],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                ContactsRoutingModule,
                MatTableModule,
                MatPaginatorModule,
                RootStoreModule,
                MatDialogModule,
                BrowserAnimationsModule,
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
        fixture = TestBed.createComponent(ContactsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
