<template>
  <div class="py-10 px-12 space-y-4">
    <h1 class="font-extrabold text-2xl underline tracking-wide">
      404 Page Not Found
    </h1>
    <div class="break-words leading-loose">
      The page you were looking for is not found.
      <br>
      <br>
      <button
        class="
          bg-transparent
          hover:bg-indigo-500
          text-blue-700
          font-semibold
          hover:text-white
          border border-blue-500
          hover:border-transparent
          rounded
          px-2
          w-30
          h-10
        "
        @click="$router.push({name:'Home'})"
      >
        Back to Home Page
      </button>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "404Page",
});
</script>
