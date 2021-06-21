<template>
  <div
    @click="window.location.href=url"
    class="flex flex-col text-left max-w-lg cursor-pointer"
  >
    <div class="text-gray-500 text-sm font-sans" v-html="meta"></div>
    <div class="font-bold text-lg underline" v-html="title"></div>
    <div class="break-words leading-loose text-sm mb-8 text-gray-300">
      {{ content }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "card",
  props: {
    title: String as PropType<string>,
    content: String as PropType<string>,
    stars: Number as PropType<number>,
    meta: String as PropType<string>,
    url: String as PropType<string>,
  },
});
</script>
