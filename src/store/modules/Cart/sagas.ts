import { all, takeLatest, select } from 'redux-saga/effects';
import { IState } from '../..';
import { addProductToCart } from './action';

type CheckProductStockRequest = ReturnType<typeof addProductToCart>;

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return (
      // eslint-disable-next-line prettier/prettier
      state.cart.items.find(item => item.product.id === product.id)?.quantity
      // eslint-disable-next-line prettier/prettier
      ?? 0
    );
  });

  console.log(currentQuantity);

  console.log('Adicionou ao carrinho');
}

export default all([takeLatest('ADD_PRODUCT_TO_CART', checkProductStock)]);
