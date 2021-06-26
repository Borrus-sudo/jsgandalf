<template>
  <div class="sm:py-9 lg:py-10 xl:py-10 2xl:py-10 py-16">
    <div class="text-center">
      <h1
        class="
          text-4xl
          tracking-tighter
          font-bold
          sm:font-bold
          md:font-bold
          lg:font-bold
          xl:font-bold
          2xl:font-extrabold
          text-gray-900
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          xl:text-6xl
          2xl:text-7xl
        "
      >
        <span class="block tracking-tight break-words text-white"
          >Hey I am JSGandalf,</span
        >
        <span class="block text-indigo-600">A Web Artisan</span>
      </h1>
      <p
        class="
          mt-3
          leading-looser
          text-xs
          sm:text-sm
          md:text-sm
          lg:text-lg
          xl:text-xl
          2xl:text-xl
          mb-8
          mx-auto
          px-1
        "
        style="color: #8a8a8a"
      >
        Hey I am JSGandalf, a web dev and game dev enthusiast<br />
        with a passion for <span class="wave-underline">VueJS</span> and
        <span class="wave-underline">GraphQL</span>
        <span class="h-4 w-2 inline blinking"></span>
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
            <brawly />
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
            <github />
            Projects
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MdiBrawlStar from "@/assets/MdiBrawlStar.vue";
import MdiSocialGithub from "@/assets/MdiSocialGithub.vue";
export default defineComponent({
  name: "Home",
  components: {
    brawly: MdiBrawlStar,
    github: MdiSocialGithub,
  },
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
