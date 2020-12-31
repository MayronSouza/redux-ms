import { Reducer } from 'react';
import { ICartState } from './types';

const INITIAL_STATE: ICartState = {
  item: [],
};

const cart: Reducer<ICartState, () => {}> = (state, action) => {
  console.log('State => ', state);
  console.log('Action => ', action);

  return INITIAL_STATE;
};

export default cart;
