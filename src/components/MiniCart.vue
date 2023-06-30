<template>
  <div>
    <div
      class="dropdown-menu p-2"
      style="
        min-width: 300px;
        right: 0;
        left: auto;
        height: 200px;
        overflow-y: scroll;
      "
      aria-labelledby="triggerId"
    >
      <div v-for="item in cart" :key="item.product.id">
        <div class="px-2 d-flex justify-content-between">
          <div>
            <strong>{{ item.product.title }}</strong>
            <br />
            {{ item.quantity }} x ${{ item.product.price }}
          </div>
          <div>
            <a
              href="#"
              class="badge bg-secondary"
              @click="removeSingleCart(item.product)"
              >Remove</a
            >
          </div>
        </div>
        <hr />
      </div>

      <div class="d-flex justify-content-between">
        <h5>Total : ${{ cartTotal }}</h5>
        <a href="#" @click="clearAllCart">Clear Cart</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  methods: {
    removeSingleCart(product) {
      this.$store.dispatch("removeSingleCart", product);
    },
    clearAllCart() {
      this.$store.dispatch("clearAllCart");
    },
  },
};
</script>

<style scoped></style>
