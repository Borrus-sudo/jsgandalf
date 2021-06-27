<template>
  <a
    class="flex flex-col text-left max-w-lg cursor-pointer"
    :target="isBlank ? '_blank' : '_self'"
    :href="url"
  >
    <div
      class="
        text-gray-400 text-xs
        sm:text-sm
        md:text-sm
        lg:text-md
        xl:text-lg
        2xl:text-lg
        font-sans
        break-words break-all
      "
      v-html="meta"
    ></div>
    <div
      class="
        font-bold
        text-sm
        sm:text-md
        md:text-md
        lg:text-lg
        xl:text-xl
        2xl:text-2xl
        underline
        break-words break-all
        text-gray-200
      "
      v-html="title"
    ></div>
    <div
      class="
        break-words
        leading-relaxed
        text-xs
        sm:text-sm
        md:text-md
        lg:text-lg
        xl:text-lg
        2xl:text-xl
        mb-8
        text-gray-300
      "
      v-html="content"
    ></div>
  </a>
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
    isBlank: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
});
</script>
