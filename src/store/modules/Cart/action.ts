import { ActionsTypes, IProduct } from './types';

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
    type: ActionsTypes.addProductToCartRequest,
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: IProduct): IProductToCart {
  return {
    type: ActionsTypes.addProductToCartSuccess,
    payload: {
      product,
    },
  };
}

export function addProductToCartFailure(
  productId: number,
): IProductToCartFailure {
  return {
    type: ActionsTypes.addProductToCartFailure,
    payload: {
      productId,
    },
  };
}
