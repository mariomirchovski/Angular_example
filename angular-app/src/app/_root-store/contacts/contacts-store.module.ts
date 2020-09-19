import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ContactsEffects } from './effects';
import { ContactsReducer } from './reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('contacts', ContactsReducer),
        EffectsModule.forFeature([ContactsEffects])
    ],
    providers: [ContactsEffects]
})
export class ContactsStoreModule { }
