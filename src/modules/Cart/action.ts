import { IProduct } from './types';

interface IProductToCart {
  type: string;
  payload: {};
}

export function addProductToCart(product: IProduct): IProductToCart {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product,
    },
  };
}
