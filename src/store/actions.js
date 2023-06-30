export const getProducts = ({ commit }) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("https://fakestoreapi.com/products", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      commit("SET_PRODUCTS", result);
    })

    .catch((error) => console.log("error", error));
};

export const getProduct = ({ commit }, productId) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(`https://fakestoreapi.com/products/${productId}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      commit("SET_PRODUCT", result);
    })
    .catch((error) => console.log("error", error));
};

export const AddProductToCart = ({ commit }, { product, quantity }) => {
  commit("ADD_TO_CART", { product, quantity });
};

export const removeSingleCart = ({ commit }, product) => {
  commit("REMOVE_SINGLE_CART", product);
};

export const clearAllCart = ({ commit }) => {
  commit("CLEAR_ALL_CART");
};

export const SellProduct = ({ commit }, productData) => {
  console.log(productData);
  commit("SELL_PRODUCT", productData);

  // var myHeaders = new Headers();
  // myHeaders.append("Content-Type", "text/plain");

  // var raw = JSON.stringify(productData);

  // var requestOptions = {
  //   method: "POST",
  //   headers: myHeaders,
  //   body: raw,
  //   redirect: "follow",
  // };

  // fetch("https://fakestoreapi.com/products", requestOptions)
  //   .then((response) => response.json())
  //   .then((result) => {
  //     commit("SELL_PRODUCT", result.id);

  //     console.log(result.id);
  //   })
  //   .catch((error) => console.log("error", error));
};
