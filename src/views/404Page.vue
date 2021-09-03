<template>
  <BaseLayout>
    <template v-slot:header> 404 Page Not Found </template>
    <template v-slot:content class="break-words leading-loose">
      The page you were looking for is not found.
      <br />
      <br />
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
        @click="$router.push({ name: 'Home' })"
      >
        Back to Home Page
      </button>
    </template>
  </BaseLayout>
</template>
<script>
import BaseLayout from "@/layouts/BaseLayout.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "404Page",
  components: { BaseLayout },
});
</script>
