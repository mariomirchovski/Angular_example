import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ContactsStoreModule } from './contacts';
import { OrganizationStoreModule } from './organization';
import { ProductStoreModule } from './product';

@NgModule({
    imports: [
        CommonModule,
        ProductStoreModule,
        ContactsStoreModule,
        OrganizationStoreModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
    ],
    declarations: []
})
export class RootStoreModule { }
