<template>
  <div style="margin-top: 65px">
    <h3 class="text-center mb-5">Please Fill The Below Form</h3>

    <form @submit="submitForm" novalidate>
      <div class="row mb-4">
        <div class="col">
          <div class="form-outline no-hover-border">
            <label class="form-label" for="form3Example1">Title</label>
            <input
              type="text"
              id="form3Example1"
              class="form-control"
              v-model="Sell.title"
              :class="
                v$.Sell.title.$error === true
                  ? 'text-field-error'
                  : 'text-field'
              "
            />
            <p
              style="color: red"
              v-for="error of v$.Sell.title.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
        </div>
        <div class="col">
          <div class="form-outline no-hover-border">
            <label class="form-label" for="form3Example2">Category</label>
            <input
              type="text"
              id="form3Example2"
              class="form-control"
              v-model="Sell.LastName"
            />
          </div>
        </div>
      </div>

      <!-- Email input -->
      <div class="row mb-4">
        <div class="col">
          <div class="form-outline no-hover-border">
            <label class="form-label" for="form3Example3">Email address</label>
            <input
              type="email"
              id="form3Example3"
              class="form-control"
              v-model="Sell.Email"
              :class="
                v$.Sell.Email.$error === true
                  ? 'text-field-error'
                  : 'text-field'
              "
            />
            <p
              style="color: red"
              v-for="error of v$.Sell.Email.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
        </div>
        <!-- phone number input -->
        <div class="col">
          <div class="form-outline no-hover-border mb-4">
            <label class="form-label" for="form3Example4">Description</label>
            <input
              type="text"
              id="form3Example4"
              class="form-control"
              v-model="Sell.description"
              :class="
                v$.Sell.description.$error === true
                  ? 'text-field-error'
                  : 'text-field'
              "
            />
            <p
              style="color: red"
              v-for="error of v$.Sell.description.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
        </div>
      </div>

      <!-- Location input -->
      <div class="form-outline no-hover-border mb-4">
        <label class="form-label" for="form3Example3">Price</label>
        <input
          type="text"
          id="form3Example3"
          class="form-control"
          v-model="Sell.price"
          :class="
            v$.Sell.price.$error === true ? 'text-field-error' : 'text-field'
          "
        />
        <p
          style="color: red"
          v-for="error of v$.Sell.price.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </p>
      </div>

      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block mb-4">
        Sign up
      </button>
    </form>
  </div>
</template>

<script>
import { required, email, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

export default {
  name: "SellProduct",
  data() {
    return {
      v$: useVuelidate(),
      Sell: {
        id: "21",
        title: "",
        LastName: "",
        Email: "",
        description: "",
        price: "",
      },
    };
  },
  validations() {
    return {
      Sell: {
        title: {
          required: helpers.withMessage("First Name Is Required", required),
          $autoDirty: true,
        },

        Email: {
          required,
          email,
          $autoDirty: true,
        },
        description: {
          required,
          $autoDirty: true,
        },
        price: {
          required,
          $autoDirty: true,
        },
      },
    };
  },
  methods: {
    submitForm() {
      this.v$.$touch();

      if (!this.v$.$error) {
        // No validation errors, form can be submitted
        // console.log("Form submitted successfully");
        console.log(this.Sell);
        this.$store.dispatch("SellProduct", this.Sell);
        alert("Product Added Successfully");
        // this.$router.push({ name: "home" });
      } else {
        // Validation errors exist
        console.log("Form has errors. Please fix them.");
      }
    },
  },
};
</script>

<style scoped>
.text-field-error {
  border-color: red;
}
.no-hover-border .form-control:focus {
  box-shadow: none;
  border-color: #ced4da;
}
</style>
