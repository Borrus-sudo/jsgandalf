<template>
  <div
    id="navbar"
    class="
      flex
      fixed
      top-0
      mt-0
      flex-wrap
      justify-center
      w-full
      backdrop-filter backdrop-blur-md
    "
  >
    <div
      class="flex items-center ml-1"
      style="cursor: pointer"
      @click="$router.push({ name: 'Home' })"
    >
      <img
        src="@/assets/icon.png"
        alt=""
        class="favicon mr-2 object-cover object-center"
      />
      <div>
        <div class="font-extrabold tracking-wider text-xl">JSGandalf</div>
        <div class="font-semibold text-gray-300 text-large">{{ insult }}</div>
      </div>
    </div>
    <div class="h-0 w-full sm:w-0 lg:w-0 md:w-0 xl:w-0 2xl:w-0"></div>
    <nav
      class="
        flex
        items-center
        justify-center
        md:ml-auto
        lg:ml-auto
        xl:ml-auto
        2xl:ml-auto
        flex-wrap
        p-2
        space-x-10
      "
    >
      <div class="hover:text-gray-200">
        <router-link class="hrefs" to="/" exact>Home</router-link>
      </div>
      <div class="hover:text-gray-200">
        <router-link class="hrefs" to="/blog">Blog</router-link>
      </div>
      <div class="hover:text-gray-200">
        <router-link class="hrefs" to="/about" exact>About</router-link>
      </div>
      <div class="hover:text-gray-200">
        <router-link class="hrefs" to="/podcast" exact>Podcast</router-link>
      </div>
      <div class="hover:text-gray-200">
        <router-link class="hrefs" to="/projects" exact>Projects</router-link>
      </div>
    </nav>
  </div>
  <!-- <div class="w-full"></div> -->
</template>

<script>
import { defineComponent } from "vue";
import random from "shakespeare-insult1.1.0";
const insult = random().split` `.slice(0, 3).join` `;
export default defineComponent({
  name: "navbar",
  setup() {
    return { insult };
  },
});
</script>
<style scoped>
.favicon {
  width: 60px;
  height: 57px;
  border-radius: 50%;
}
#navbar::after {
  content: "";
  height: 5.5px;
  display: inline-block;
  width: 100%;
  background: var(--gradient);
}
.router-link-active {
  @apply underline;
}
</style>
