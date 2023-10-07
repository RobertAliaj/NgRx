import {createAction, props} from '@ngrx/store';
import {Product} from '../product';

export const toggleProductCode = createAction(
  '[Product] Toggle Product Code'
);

export const setCurrentProduct = createAction(
  '[Product] Set Current Product',
  props<{ currentProductId: number }>()
);

export const clearCurrentProduct = createAction(
  '[Product] Clear Current Product',
);

export const initializeCurrentProduct = createAction(
  '[Product] Initialize Current Product'
);

export const loadProducts = createAction(
  '[Product] Load'
);

export const loadProductsSuccess = createAction(
  '[Product] Load Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product] Load Fail',
  props<{ error: string }>()
);

// This Action should kick off the save to the Backend Server
export const updateProduct = createAction(
  '[Product] Update Product',
  props<{ product: Product }>()
);

// This action will be dispatched from the reducer if the save to the Backend Server is successful.
export const updateProductSuccess = createAction(
  '[Product] Update Product Success',
  props<{ product: Product }>()
);

// This action will be dispatched from the reducer if the save to the Backend Server is not successful.
export const updateProductFailure = createAction(
  '[Product] Update Product Fail',
  props<{ error: string }>()
);


