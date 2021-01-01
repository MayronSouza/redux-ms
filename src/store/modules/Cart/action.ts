import { IProduct } from './types';

export interface IProductToCart {
  type: string;
  payload: {
    product: IProduct;
  };
}

export interface IProductToCartFailure {
  type: string;
  payload: {
    productId: number;
  };
}

export function addProductToCartRequest(product: IProduct): IProductToCart {
  return {
    type: 'ADD_PRODUCT_TO_CART_REQUEST',
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: IProduct): IProductToCart {
  return {
    type: 'ADD_PRODUCT_TO_CART_SUCCESS',
    payload: {
      product,
    },
  };
}

export function addProductToCartFailure(
  productId: number,
): IProductToCartFailure {
  return {
    type: 'ADD_PRODUCT_TO_CART_FAILURE',
    payload: {
      productId,
    },
  };
}
