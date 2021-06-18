<template>
  <div class="py-10 px-10">
    <div class="space-y-10">
      <div v-for="blog in blogs" :key="blog._id">
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
import { defineComponent, onBeforeMount, ref } from "vue";
import card from "@/components/card.vue";
export default defineComponent({
  name: "Blog",
  components: { card },
  setup() {
    const url = "https://jdev.glitch.me/post/getPost";
    const blogs = ref([]);
    onBeforeMount(async () => {
      const res = await fetch(url);
      const json = await res.json();
      json.forEach((element) => {
        blogs.value.push(element);
      });
      blogs.value.sort((a, b) => a.time - b.time);
    });
    return { blogs };
  },
});
</script>
