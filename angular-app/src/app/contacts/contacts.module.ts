import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';

@NgModule({
    declarations: [ContactsComponent],
    imports: [
        CommonModule,
        ContactsRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
    ]
})

export class ContactsModule { }
