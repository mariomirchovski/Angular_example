import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ErrorReducer } from './reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('error', ErrorReducer)
    ]
})
export class ErrorStoreModule { }
