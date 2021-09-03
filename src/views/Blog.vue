<template>
  <BaseLayout>
    <template v-slot:content>
      <div v-if="loaded">
        <div v-once v-for="blog in data.blogs" :key="blog._id">
          <card
            :title="blog.message.split('<h5')[1].split('>')[1].trim()"
            :content="blog.meta"
            :meta="blog.time + ` . ${blog.duration}`"
            :stars="blog.star"
            @click="$router.push({ name: 'subblog', params: { id: blog._id } })"
          />
        </div>
      </div>
      <div v-else class="flex justify-center mt-10">
        <loading />
      </div>
    </template>
  </BaseLayout>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
import card from "@/components/card.vue";
import data from "@/utils/fetchBlogs.ts";
import loading from "@/assets/MdiLoading.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
export default defineComponent({
  name: "Blog",
  components: { card, loading, BaseLayout },
  setup() {
    const loaded = ref(
      data.blogs.length >= data.end - data.start + 1 ? true : false
    );
    const baseURL = "/blog/";
    const string1 = '<h5 class="title">\'';
    watch(data.blogs, () => {
      loaded.value = true;
    });
    return { data, loaded, baseURL, string1 };
  },
});
</script>
