
import { createFeatureSelector } from '@ngrx/store';
import { ErrorState } from './state';

const getErrorState = createFeatureSelector<ErrorState>('error');
