import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', component: ContactsComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [],
    exports: [RouterModule]
})

export class ContactsRoutingModule { }
