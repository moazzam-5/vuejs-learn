<template>
  <div class="">
    <nav
      class="bg-white p-2 shadow w-[220px] md:w-auto md:flex md:items-center md:justify-between"
    >
      <div class="flex justify-between items-center">
        <span class="text-2xl font-semibold cursor-pointer">
          <img
            class="h-10 inline"
            src="https://www.drupal.org/files/project-images/screenshot_361.png"
            alt=""
          />
          Tailwind Nav</span
        >
        <!-- <span class="text-3xl cursor-pointer md:hidden block mx-2">
          <ion-icon :name="iconName" @click="toggleMenu"></ion-icon>
        </span> -->
      </div>
      <ul
        class="md:flex md:items-center z-[-1] md:z-auto bg-white w-[200px] left-0 md:w-auto md:py-0 py-4 md:pl-0 md:opacity-100 top-[-400px] transition-all ease-in duration-500"
      >
        <li class="mx-4 my-6 md:my-0 hover:bg-slate-100 md:hover:bg-white">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500">Home</a>
        </li>
        <li class="mx-4 my-6 md:my-0 hover:bg-slate-100 md:hover:bg-white">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500"
            >Service</a
          >
        </li>
        <li class="mx-4 my-6 md:my-0 hover:bg-slate-100 md:hover:bg-white">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500">About</a>
        </li>
        <li class="mx-4 my-6 md:my-0 hover:bg-slate-100 md:hover:bg-white">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500"
            >Contact</a
          >
        </li>
        <li class="mx-4 my-6 md:my-0 hover:bg-slate-100 md:hover:bg-white">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500"
            >Blog's</a
          >
        </li>
        <button
          class="bg-cyan-400 text-white px-6 py-2 mx-4 hover:bg-cyan-500 duration-500 rounded font-semibold"
        >
          Login
        </button>
      </ul>
    </nav>
    <!-- product card -->
    <div class="md:flex md:items-center justify-center gap-4 lg:gap-0 mt-4">
      <div class="card mt-5 md:mt-0 mx-auto md:mx-0">
        <img
          class="w-100 h-100 object-cover"
          src="https://www.photoroom.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F191576%2F1048x786%2F9a7540ccb9%2Fblack-background-1.png&w=3840&q=75"
          alt=""
        />
        <div class="p-4 flex flex-col gap-2">
          <div class="flex items-center gap-3">
            <span class="px-3 py-1 rounded-full text-xs bg-gray-100"
              >Pick Up
            </span>
            <span class="px-3 py-1 rounded-full text-xs bg-gray-100"
              >Official Store</span
            >
          </div>
          <h1
            class="text-2xl font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap"
          >
            Premium Headphone
          </h1>
          <div class="">
            <span class="text-xl font-semibold">Rs 40,000/-</span>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-sm line-through opacity-60">Rs 50,000/-</span>
              <span class="text-white bg-slate-700 text-sm rounded-md px-2"
                >save 20%</span
              >
            </div>
            <span class="flex text-yellow-500 mt-2">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star-half-outline"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
            </span>
            <div class="flex justify-between mt-4">
              <button
                class="bg-slate-700 text-white hover:bg-slate-900 rounded-md px-2 py-1"
              >
                Add To Cart
              </button>
              <button class="hover:text-lg">
                <ion-icon
                  class="text-red-600 hover:text-red-700 hover:scale-125 duration-200"
                  name="heart"
                ></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- 2nd -->
      <div class="card mt-5 md:mt-0 mx-auto md:mx-0">
        <img
          class="w-100 h-100 object-cover"
          src="https://www.photoroom.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F191576%2F1048x786%2F9a7540ccb9%2Fblack-background-1.png&w=3840&q=75"
          alt=""
        />
        <div class="p-4 flex flex-col gap-2">
          <div class="flex items-center gap-3">
            <span class="px-3 py-1 rounded-full text-xs bg-gray-100"
              >Pick Up
            </span>
            <span class="px-3 py-1 rounded-full text-xs bg-gray-100"
              >Official Store</span
            >
          </div>
          <h1
            class="text-2xl font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap"
          >
            Premium Headphone
          </h1>
          <div class="">
            <span class="text-xl font-semibold">Rs 40,000/-</span>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-sm line-through opacity-60">Rs 50,000/-</span>
              <span class="text-white bg-slate-700 text-sm rounded-md px-2"
                >save 20%</span
              >
            </div>
            <span class="flex text-yellow-500 mt-2">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star-half-outline"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
            </span>
            <div class="flex justify-between mt-4">
              <button
                class="bg-slate-700 text-white hover:bg-slate-900 rounded-md px-2 py-1"
              >
                Add To Cart
              </button>
              <button class="hover:text-lg">
                <ion-icon
                  class="text-red-600 hover:text-red-700 hover:scale-125 duration-200"
                  name="heart"
                ></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- 3rd -->
      <div class="card mt-5 md:mt-0 mx-auto md:mx-0">
        <img
          class="w-100 h-100 object-cover"
          src="https://www.photoroom.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F191576%2F1048x786%2F9a7540ccb9%2Fblack-background-1.png&w=3840&q=75"
          alt=""
        />
        <div class="p-4 flex flex-col gap-2">
          <div class="flex items-center gap-3">
            <span class="px-3 py-1 rounded-full text-xs bg-gray-100"
              >Pick Up
            </span>
            <span class="px-3 py-1 rounded-full text-xs bg-gray-100"
              >Official Store</span
            >
          </div>
          <h1
            class="text-2xl font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap"
          >
            Premium Headphone
          </h1>
          <div class="">
            <span class="text-xl font-semibold">Rs 40,000/-</span>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-sm line-through opacity-60">Rs 50,000/-</span>
              <span class="text-white bg-slate-700 text-sm rounded-md px-2"
                >save 20%</span
              >
            </div>
            <span class="flex text-yellow-500 mt-2">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star-half-outline"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
            </span>
            <div class="flex justify-between mt-4">
              <button
                class="bg-slate-700 text-white hover:bg-slate-900 rounded-md px-2 py-1"
              >
                Add To Cart
              </button>
              <button class="hover:text-lg">
                <ion-icon
                  class="text-red-600 hover:text-red-700 hover:scale-125 duration-200"
                  name="heart"
                ></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- 4th -->
      <div class="card mt-5 md:mt-0 mx-auto md:mx-0">
        <img
          class="w-100 h-100 object-cover"
          src="https://www.photoroom.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F191576%2F1048x786%2F9a7540ccb9%2Fblack-background-1.png&w=3840&q=75"
          alt=""
        />
        <div class="p-4 flex flex-col gap-2">
          <div class="flex items-center gap-3">
            <span class="px-3 py-1 rounded-full text-xs bg-gray-100"
              >Pick Up
            </span>
            <span class="px-3 py-1 rounded-full text-xs bg-gray-100"
              >Official Store</span
            >
          </div>
          <h1
            class="text-2xl font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap"
          >
            Premium Headphone
          </h1>
          <div class="">
            <span class="text-xl font-semibold">Rs 40,000/-</span>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-sm line-through opacity-60">Rs 50,000/-</span>
              <span class="text-white bg-slate-700 text-sm rounded-md px-2"
                >save 20%</span
              >
            </div>
            <span class="flex text-yellow-500 mt-2">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star-half-outline"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
            </span>
            <div class="flex justify-between mt-4">
              <button
                class="bg-slate-700 text-white hover:bg-slate-900 rounded-md px-2 py-1"
              >
                Add To Cart
              </button>
              <button class="hover:text-lg">
                <ion-icon
                  class="text-red-600 hover:text-red-700 hover:scale-125 duration-200"
                  name="heart"
                ></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- set active tab  nav  -->
    <nav>
      <ul class="flex gap-5 mt-4 justify-center">
        <li v-for="item in navItems" :key="item.id">
          <button
            :class="{
              'text-blue-700': activeItem === item.id,
              'text-gray-500': activeItem !== item.id,
            }"
            @click="setActiveItem(item.id)"
          >
            {{ item.label }}
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TailwindNav",

  data() {
    return {
      iconName: "menu-outline",
      navItems: [
        { id: 1, label: "Home" },
        { id: 2, label: "About" },
        { id: 3, label: "Services" },
        { id: 4, label: "Contact" },
      ],
      activeItem: null,
    };
  },
  methods: {
    setActiveItem(itemId) {
      this.activeItem = itemId;
    },
    toggleMenu() {
      let list = document.querySelector("ul");
      if (this.iconName === "menu-outline") {
        this.iconName = "close";
        list.classList.add("top-[80px]");
        list.classList.add("opacity-100");
      } else {
        this.iconName = "menu-outline";
        list.classList.remove("top-[80px]");
        list.classList.remove("opacity-100");
      }
    },
  },
};
</script>

<style scoped></style>
