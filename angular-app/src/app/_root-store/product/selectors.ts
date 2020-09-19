import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './state';

const getAllProducts = (state: ProductState) => state.items;
const getProductsState = createFeatureSelector<ProductState>('product');

export const getAllProductsEntitiesSelector = createSelector(getProductsState, getAllProducts);
