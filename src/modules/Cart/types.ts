export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICartItem {
  products: {};
  quantity: number;
}

export interface ICartState {
  item: ICartItem[];
}
