import { createStore } from 'redux';
import { ICartState } from './modules/Cart/types';

import rootReducers from './modules/rootReducers';

export interface IState {
  cart: ICartState;
}

const store = createStore(rootReducers);

export default store;
