import { Reducer } from 'react';
import { ICartState } from './types';

const INITIAL_STATE: ICartState = {
  item: [],
};

const cart: Reducer<ICartState, () => {}> = () => {
  return INITIAL_STATE;
};

export default cart;
