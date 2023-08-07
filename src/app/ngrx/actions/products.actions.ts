import { createAction, props } from '@ngrx/store';
import { Products } from 'src/app/models/products.model';
// lấy danh sách sản phẩm
export const get = createAction('[Products] Get Products');
export const getSuccess = createAction(
  '[Products] Get Products Success',
  props<{ productList: Products[] }>()
);
export const getFailure = createAction(
  '[Products] Get Products Failure',
  props<{ error: any }>()
);

// thêm sản phẩm lên server

export const add = createAction('[Products] Add Products');
export const addSuccess = createAction(
  '[Products] Add Products Success',
  props<{ product: Products }>()
);
export const addFailure = createAction(
  '[Products] Add Products Failure',
  props<{ error: any }>()
);

// mua sản phẩm (thêm vào giỏ hàng)
export const addToCart = createAction(
  '[Products] Buy Products',
  props<{ cloth: Products }>()
);

export const removeFormCart = createAction(
  '[Products] Remove Products',
  props<{ cloth: Products }>()
);

export const addToStock = createAction(
  '[Products] Add To Stock',
  props<{ cloth: Products }>()
);

export const removeFormStock = createAction(
  '[Products] Remove From Stock',
  props<{ cloth: Products }>()
);