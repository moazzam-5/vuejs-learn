<template>
  <div class="col-3 mt-10 ms-3" style="margin-top: 5rem">
    <div class="card h-100 text-start">
      <img class="h-50" :src="product.image" alt="Title" />
      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="{ name: 'Product', params: { id: product.id } }">{{
            product.title
          }}</router-link>
        </h4>
        <strong>{{ product.price }}</strong>
        <p class="card-text">{{ product.description }}</p>
      </div>
      <div class="px-4 pb-3">
        <button @click="AddToCart" class="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
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
