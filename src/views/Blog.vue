<template>
  <div class="py-10 px-10">
    <div class="space-y-10">
      <div v-if="loaded">
        <div v-once v-for="blog in data.blogs" :key="blog._id">
          <card
            :title="blog.message.split('</h5>')[0] + '</h5>'"
            :content="
              'LoremIpsumDocet>LoremIpsumDocet>LoremIpsumDocet'.repeat(
                Math.floor(Math.random() * 2 + 1)
              )
            "
            url=""
            :meta="blog.time + ' . 4 min read'"
            :stars="blog.star"
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
    const loaded = ref(
      data.blogs.length >= data.end - data.start + 1 ? true : false
    );
    watch(data.blogs, () => {
      loaded.value = true;
    });
    return { data, loaded };
  },
});
</script>
