<template>
  <div class="py-10 px-10">
    <div class="space-y-10">
      <div v-if="loaded">
        <div v-for="blog in data.blogs" :key="blog._id">
          <card
            :title="blog.message.split('</h5>')[0] + '</h5>'"
            :content="blog.message"
            :stars="blog.star"
            :time="blog.time"
          />
        </div>
      </div>
      <div v-else class="flex justify-center mt-10">
        <loading />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
import card from "@/components/card.vue";
import data from "@/utils/fetchBlogs.ts";
import loading from "@/assets/MdiLoading.vue";
export default defineComponent({
  name: "Blog",
  components: { card, loading },
  setup() {
    const loaded = ref(false);
    watch(data.blogs, () => {
      loaded.value = true;
    });
    return { data, loaded };
  },
});
</script>
