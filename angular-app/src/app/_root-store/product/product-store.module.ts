import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductEffects } from './effects';
import { ProductReducer } from './reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('product', ProductReducer),
        EffectsModule.forFeature([ProductEffects])
    ],
    providers: [ProductEffects]
})
export class ProductStoreModule { }
