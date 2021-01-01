export enum ActionsTypes {
  // eslint-disable-next-line no-unused-vars
  addProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
  // eslint-disable-next-line no-unused-vars
  addProductToCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
  // eslint-disable-next-line no-unused-vars
  addProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE',
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
  failedStockCheck: number[];
}
