<template>
  <div
    class="
      sm:py-9
      lg:py-10
      xl:py-10
      2xl:py-10
      py-14
      px-4
      sm:px-8
      md:px-10
      lg:px-12
      xl:px-20
      2xl:px-24
    "
  >
    <div v-if="loaded">
      <div
        class="
          text-gray-400 text-xs
          sm:text-sm
          lg:text-md
          md:text-md
          xl:text-lg
          2xl:text-lg
          font-sans
          break-words
        "
        v-html="blog.time + ' . 4 min read'"
      ></div>
      <h1
        class="
          font-extrabold
          text-xl
          lg:text-2xl
          xl:text-3xl
          2xl:text-4xl
          underline
          tracking-wide
        "
        v-html="blog.message.split('</h5>')[0] + '</h5>'"
      ></h1>
      <div
        class="
          break-words
          leading-loose
          text-sm
          xl:text-lg
          2xl:text-xl
          text-gray-300
        "
        v-html="blog.message"
      ></div>
    </div>
    <div v-else class="flex justify-center mt-20">
      <loading />
    </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import called from "@/utils/keepTrack";
import loading from "@/assets/MdiLoading.vue";
export default defineComponent({
  name: "page",
  components: { loading },
  setup() {
    const route = useRoute();
    let blog = reactive({ message: "", time: "", star: 0, _id: "" });
    const loaded = ref(false);
    onBeforeMount(async () => {
      if (called.calledBlogs.includes(route.params.id)) {
        const result = await import("@/utils/fetchBlogs");
        const data = result.default;
        Object.assign(
          blog,
          data.blogs.filter((blog) => blog._id === route.params.id)[0]
        );
        loaded.value = true;
      } else {
        const res = await fetch(
          `https://jdev.glitch.me/post/getPost/${route.params.id}`
        );
        const data = await res.json();
        Object.assign(blog, data[0]);
        loaded.value = true;
      }
    });

    return { blog, loaded };
  },
});
</script>
