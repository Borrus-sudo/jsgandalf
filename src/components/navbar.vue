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
        p-3
        space-x-10
      "
    >
      <div class="hover:text-monokai-icon-background-default hrefs">
        <router-link to="/" exact>Home</router-link>
      </div>
      <div
        class="hover:text-monokai-icon-background-default"
        :class="['hrefs', toUnderline ? ['border-b', 'border-gray-100'] : '']"
        :style="toUnderline ? { 'border-spacing': '2px' } : {}"
      >
        <router-link to="/blog" exact>Blog</router-link>
      </div>
      <div class="hover:text-monokai-icon-background-default hrefs">
        <router-link to="/about" exact>About</router-link>
      </div>
      <div class="hover:text-monokai-icon-background-default hrefs">
        <router-link to="/projects" exact>Projects</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { random } from "shakespeare-insult1.1.0";
import router from "@/router";

const insult = random().split` `.slice(0, 3).join` `;
export default defineComponent({
  name: "navbar",
  setup() {
    const toUnderline = ref(false);
    router.afterEach((to) => {
      if (to.fullPath.includes("/blog/")) {
        toUnderline.value = true;
      } else {
        toUnderline.value = false;
      }
    });
    return { insult, toUnderline };
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
  border-spacing: 4px;
  @apply border-b border-gray-100;
}
</style>
