<template>
  <div @click="null;" class="flex flex-col text-left max-w-lg cursor-pointer">
    <div class="text-gray-500 text-sm font-sans">{{time}} . 4 min read</div>
    <div class="font-bold text-lg underline" v-html="title"></div>
    <div class="break-words leading-loose text-sm mb-8 text-gray-300">
      {{"LoremIpsumDocet>LoremIpsumDocet>LoremIpsumDocet".repeat(Math.floor((Math.random() *2) + 1))}}
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
    time:String as PropType<string>
  },
});
</script>
