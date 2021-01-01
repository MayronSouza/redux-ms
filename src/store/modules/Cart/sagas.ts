import { AxiosResponse } from 'axios';
// eslint-disable-next-line object-curly-newline
import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { IState } from '../..';
import api from '../../../services/api';
import {
  addProductToCartFailure,
  addProductToCartRequest,
  addProductToCartSuccess,
} from './action';
import { ActionsTypes } from './types';

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;

interface IStockREsponse {
  id: number;
  quantity: number;
}

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

  const availableStockResponse: AxiosResponse<IStockREsponse> = yield call(
    api.get,
    `stock/${product.id}`,
  );

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  }
}

export default all([
  takeLatest(ActionsTypes.addProductToCartRequest, checkProductStock),
]);
