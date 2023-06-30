<template>
  <div class="row mt-5" v-if="product">
    <div class="col-4">
      <img class="w-100" :src="product.image" alt="Title" />
    </div>
    <div class="col-8">
      <h1>{{ product.title }}</h1>
      <h3>{{ product.price }}</h3>
      <input type="text" class="text-center col-1 ms-2 me-2 p-1" />
      <button class="btn btn-primary" @click="AddToCart">Add to Cart</button>

      <p class="mt 4">
        {{ product.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["id"],

  computed: {
    product() {
      return this.$store.state.product;
    },
  },

  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
  methods: {
    AddToCart() {
      this.$store.dispatch("AddProductToCart", {
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>

<style scoped></style>
