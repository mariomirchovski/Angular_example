import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { OrganizationEffects } from './effects';
import { OrganizationReducer } from './reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('organization', OrganizationReducer),
        EffectsModule.forFeature([OrganizationEffects])
    ],
    providers: [OrganizationEffects]
})
export class OrganizationStoreModule { }
