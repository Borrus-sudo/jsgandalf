<template>
  <div class="py-10 px-10">
    <div class="space-y-10">
      <div v-for="blog in data.blogs" :key="blog._id">
        <card
          :title="blog.message.split('</h5>')[0] + '</h5>'"
          :content="blog.message"
          :stars="blog.star"
          :time="blog.time"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import card from "@/components/card.vue";
import data from "@/utils/fetchBlogs.ts"
export default defineComponent({
  name: "Blog",
  components: { card },
  setup() {
    return {data };
  },
});
</script>
