<template>
  <div class="sm:py-9 lg:py-10 xl:py-10 2xl:py-10 py-16">
    <div class="text-center">
      <h1
        class="
          text-4xl
          tracking-tighter
          font-bold
          text-gray-900
          sm:text-5xl
          md:text-6xl
        "
      >
        <span class="block tracking-tight break-words xl:inline text-white"
          >JSGandalf(he/him)</span
        >
        <span class="block text-indigo-600 xl:inline">Web Artisan</span>
      </h1>
      <p
        class="
          mt-3
          text-base text-gray-500
          leading-looser
          sm:mt-5
          sm:text-lg
          sm:max-w-xl
          md:mt-5
          md:text-xl
          mx-auto
          px-1
        "
      >
        Hey I am JSGandalf, a web dev and game dev enthusiast with a passion for
        <span class="wave-underline">VueJS</span> and
        <span class="wave-underline">GraphQL</span>
        <span class="h-5 w-2 inline-block blinking"></span>
      </p>
      <div class="mt-5 sm:mt-8 sm:flex justify-center mx-4">
        <div class="rounded-md shadow">
          <a
            class="
              w-full
              flex
              items-center
              justify-center
              px-8
              py-3
              border border-transparent
              text-base
              font-medium
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              md:py-4
              md:text-lg
              md:px-10
              cursor-pointer
            "
            @click="$router.push({ name: 'Blog' })"
          >
            Read my blog
          </a>
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-3">
          <a
            class="
              w-full
              flex
              items-center
              justify-center
              px-8
              py-3
              border border-transparent
              text-base
              font-medium
              rounded-md
              text-indigo-700
              bg-indigo-100
              hover:bg-indigo-200
              md:py-4
              md:text-lg
              md:px-10
              cursor-pointer
            "
            @click="$router.push({ name: 'Project' })"
          >
            Projects
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
});
</script>

<style scoped>
@keyframes blink {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.blinking {
  background-color: #abacb0;
  animation-duration: 0.39s;
  animation-name: blink;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
</style>
