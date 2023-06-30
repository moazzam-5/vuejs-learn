export const SET_PRODUCTS = (state, data) => {
  state.products = data;
};

export const SET_PRODUCT = (state, data) => {
  state.product = data;
};

export const ADD_TO_CART = (state, { product, quantity }) => {
  let productIncart = state.cart.find((item) => {
    return item.product.id === product.id;
  });

  if (productIncart) {
    productIncart.quantity += quantity;
    return;
  }

  state.cart.push({
    product,
    quantity,
  });
};

export const REMOVE_SINGLE_CART = (state, product) => {
  state.cart = state.cart.filter((item) => {
    return item.product.id != product.id;
  });
};

export const CLEAR_ALL_CART = (state) => {
  state.cart = [];
};
export const SELL_PRODUCT = (state, productData) => {
  state.products.push(productData);
};
