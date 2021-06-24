<template>
  <div
    class="
      py-16
      sm:py-9
      lg:py-10
      xl:py-10
      2xl:py-10
      px-4
      sm:px-8
      md:px-10
      lg:px-12
      xl:px-20
      2xl:px-24
    "
  >
    <div v-if="loaded">
      <div v-once v-for="blog in data.blogs" :key="blog._id">
        <card
          :title="blog.message.split('</h5>')[0] + '</h5>'"
          :content="blog.meta"
          :url="baseURL + blog._id"
          :meta="blog.time + ' . 4 min read'"
          :stars="blog.star"
          :isBlank="false"
        />
      </div>
    </div>
    <div v-else class="flex justify-center mt-10">
      <loading />
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
    const baseURL = "/#/blog/";
    watch(data.blogs, () => {
      loaded.value = true;
    });
    return { data, loaded, baseURL };
  },
});
</script>
