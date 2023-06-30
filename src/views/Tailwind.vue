<template>
  <div
    class="container w-100 text-white gap-10 grid lg:grid-cols-4 md:grid-cols-2 xl:grid-cols-6"
  >
    <div class="bg-[grey] text-center py-10">Hello World</div>
    <div class="bg-[grey] text-center py-10">Hello World</div>
    <div class="bg-[grey] text-center py-10">Hello World</div>
    <div class="bg-[grey] text-center py-10">Hello World</div>
    <div class="bg-[grey] text-center py-10">Hello World</div>
    <div class="bg-[grey] text-center py-10">Hello World</div>
    <div class="bg-[grey] text-center py-10">Hello World</div>
    <div class="bg-[grey] text-center py-10">Hello World</div>
  </div>
  <div class="max-w-100 mx-auto">
    <h1 class="text-3xl text-center py-5">Products</h1>
  </div>
  <div class="max-w-100 mx-auto grid lg:grid-cols-4 gap-7">
    <div class="text-center shadow-lg">
      <div class="overflow-hidden">
        <img
          src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg"
          alt=""
          class="hover:scale-125 duration-1000"
        />
      </div>
      <h3 class="py-2 text-2xl">Hot Grill Burger</h3>
      <p class="py-2">Rs.750</p>
    </div>
    <div class="text-center shadow-lg">
      <div class="overflow-hidden">
        <img
          src="https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_1280.jpg"
          alt=""
          class="hover:scale-125 duration-1000"
        />
      </div>
      <h3 class="py-2 text-2xl">Spicy Tower Burger</h3>
      <p class="py-2">Rs.750</p>
    </div>
    <div class="text-center shadow-lg">
      <div class="overflow-hidden">
        <img
          src="https://cdn.pixabay.com/photo/2023/06/02/19/12/ai-generated-8036255_1280.jpg"
          alt=""
          class="hover:scale-125 duration-1000"
        />
      </div>
      <h3 class="py-2 text-2xl">Hot Grill Burger</h3>
      <p class="py-2">Rs.750</p>
    </div>
    <div class="text-center shadow-lg">
      <div class="overflow-hidden">
        <img
          src="https://cdn.pixabay.com/photo/2022/05/25/21/28/burger-7221436_1280.jpg"
          alt=""
          class="hover:scale-125 duration-1000"
        />
      </div>
      <h3 class="py-2 text-2xl">Monster Burger</h3>
      <p class="py-2">Rs.750</p>
    </div>
  </div>

  <div class="max-w-100 mx-auto">
    <h1 class="text-3xl text-center py-5">End Products</h1>
  </div>

  <div class="flex flex-col md:flex-row gap-5">
    <div class="w-100 h-14 bg-slate-200">01</div>
    <div class="w-100 h-14 bg-slate-200">02</div>
    <div class="w-100 h-14 bg-slate-200">03</div>
  </div>

  <header class="bg-teal-700 text-white sticky top-0 z-10">
    <section class="max-w-4xl mx-auto p-4 flex justify-between items-center">
      <h1 class="text-3xl font-medium">
        <a href="#hero">🚀 Acme Rockets</a>
      </h1>
      <div>
        <button
          id="mobile-open-button"
          class="text-3xl sm:hidden focus:outline-none"
        >
          &#9776;
        </button>
        <nav class="hidden sm:block space-x-8 text-xl" aria-label="main">
          <a href="#rockets" class="hover:opacity-90">Our Rockets</a>
          <a href="#testimonials" class="hover:opacity-90">Testimonials</a>
          <a href="#contact" class="hover:opacity-90">Contact Us</a>
        </nav>
      </div>
    </section>
  </header>
  <main class="max-w-4xl mx-auto">
    <section
      id="hero"
      class="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40"
    >
      <article class="sm:w-1/2">
        <h2
          class="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white"
        >
          We Boldy Go
          <span class="text-indigo-700 dark:text-indigo-300"
            >Where No Rocket</span
          >
          Has Gone Before...
        </h2>
        <p
          class="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400"
        >
          We're building rockets for the next century today. From the moon to
          Mars, Jupiter and beyond...
        </p>
        <p
          class="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400"
        >
          Think Acme Rockets.
        </p>
      </article>
      <img
        class="w-1/2"
        src="https://cdn.pixabay.com/photo/2022/05/25/21/28/burger-7221436_1280.jpg"
        alt="Rocket Dab"
      />
    </section>

    <hr class="mx-auto bg-black dark:bg-white w-1/2" />

    <section id="rockets" class="p-6 my-12 scroll-mt-20">
      <h2
        class="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white"
      >
        Our Rockets
      </h2>
      <ul
        class="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8"
      >
        <li
          class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl"
        >
          <img
            src="https://cdn.pixabay.com/photo/2022/05/25/21/28/burger-7221436_1280.jpg"
            alt="Explorer"
            class="w-1/2 mb-6"
          />
          <h3 class="text-3xl text-center text-slate-900 dark:text-white">
            Explorer
          </h3>
          <p
            class="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400"
          >
            $
          </p>
          <p
            class="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400"
          >
            Affordable Exploration
          </p>
        </li>
        <li
          class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl"
        >
          <img
            src="https://cdn.pixabay.com/photo/2022/05/25/21/28/burger-7221436_1280.jpg"
            alt="Adventurer"
            class="w-1/2 mb-6"
          />
          <h3 class="text-3xl text-center text-slate-900 dark:text-white">
            Adventurer
          </h3>
          <p
            class="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400"
          >
            $$
          </p>
          <p
            class="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400"
          >
            Best Selling Rocket!
          </p>
        </li>
        <li
          class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl"
        >
          <img
            src="https://cdn.pixabay.com/photo/2022/05/25/21/28/burger-7221436_1280.jpg"
            alt="Infinity"
            class="w-1/2 mb-6"
          />
          <h3 class="text-3xl text-center text-slate-900 dark:text-white">
            Infinity
          </h3>
          <p
            class="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400"
          >
            $$$
          </p>
          <p
            class="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400"
          >
            Luxury Starship
          </p>
        </li>
      </ul>
    </section>

    <hr class="mx-auto bg-black dark:bg-white w-1/2" />

    <section id="testimonials" class="p-6 my-12">
      <h2
        class="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white"
      >
        Testimonials
      </h2>
    </section>

    <hr class="mx-auto bg-black dark:bg-white w-1/2" />

    <section id="contact" class="p-6 my-12">
      <h2
        class="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white"
      >
        Contact Us
      </h2>
    </section>
  </main>
</template>

<script>
export default {
  name: "Weather",
};
</script>

<style scoped></style>
