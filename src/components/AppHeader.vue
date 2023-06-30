<template>
  <div>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container">
        <div class="nav navbar-nav">
          <router-link to="/" class="nav-item nav-link active"
            >Home</router-link
          >

          <router-link to="/sellproduct" class="nav-item nav-link active"
            >Sell Product</router-link
          >
          <router-link to="/tailwind" class="nav-item nav-link active"
            >Tailwind</router-link
          >
        </div>

        <div>
          <div class="dropdown open">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ cartItemCount }} Cart
            </button>
            <div @click="$event.stopPropagation()">
              <MiniCart></MiniCart>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MiniCart from "./MiniCart.vue";
export default {
  components: {
    MiniCart,
  },
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  },
};
</script>

<style scoped></style>
