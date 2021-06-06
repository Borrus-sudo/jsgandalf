<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "listBlogs",
  props: {
    msg: String as PropType<string>,
  },
});
</script>

<style scoped>
</style>
