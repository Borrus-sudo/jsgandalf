<template>
  <div class="flex flex-col text-left max-w-lg">
    <div class="text-base text-gray-400">{{time}}.4 min read</div>
    <div class="underline font-bold text-2xl" v-html="title"></div>
    <div class="break-words">
      LoremIpsumDocet>LoremIpsumDocet>LoremIpsumDocet>LoremIpsumDocet>LoremIpsumDocet>LoremIpsumDocet
    </div>
    <br />
    <button
      class="
        bg-transparent
        hover:bg-indigo-500
        text-blue-700
        font-semibold
        hover:text-white
        py-2
        px-4
        border border-blue-500
        hover:border-transparent
        rounded
        w-24
        h-10
      "
    >
      Read
    </button>
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
    time:String as PropType<string>
  },
});
</script>
