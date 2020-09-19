import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ContactsStoreModule } from './contacts';
import { ProductStoreModule } from './product';

@NgModule({
    imports: [
        CommonModule,
        ProductStoreModule,
        ContactsStoreModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),

    ],
    declarations: []
})
export class RootStoreModule { }
