<template>
  <div class="flex flex-col text-left max-w-lg">
    <pre class="text-gray-400 text-sm font-sans">{{time}} . 4 min read</pre>
    <div class="underline font-bold text-lg" v-html="title"></div>
    <div class="break-words leading-loose text-sm mb-2">
      LoremIpsumDocet>LoremIpsumDocet>LoremIpsumDocet>LoremIpsumDocet>LoremIpsumDocet>LoremIpsumDocet
    </div>
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
        w-20
        h-8
        mb-4
        text-sm
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
