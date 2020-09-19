import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './state';

const getAllProducts = (state: ProductState) => state.items;
const getProductsCount = (state: ProductState) => state.meta?.paging?.total;
const getProductsState = createFeatureSelector<ProductState>('product');

export const getAllProductsEntitiesSelector = createSelector(getProductsState, getAllProducts);
export const getProductsCountSelector = createSelector(getProductsState, getProductsCount);
