<template>
  <div
    class="
      sm:py-9
      lg:py-10
      xl:py-10
      2xl:py-10
      py-14
      px-4
      sm:px-10
      md:px-12
      lg:px-12
      xl:px-24
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
        v-html="blog.time + ` . ${blog.duration}`"
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
          mb-2
        "
        v-html="blog.message.split('</h5>')[0] + '</h5>'"
      ></h1>
      <div
        style="line-height: 1.8"
        class="
          break-words
          text-sm
          sm:text-md
          md:text-md
          xl:text-lg
          2xl:text-xl
          text-gray-300
        "
        v-html="blog.message.split('</h5>')[1]"
      ></div>

      <button
        class="
          bg-transparent
          hover:bg-indigo-500
          text-blue-700
          font-semibold
          hover:text-white
          border border-blue-500
          hover:border-transparent
          rounded-md
          shadow
          px-2
          w-30
          h-8
          mt-3
        "
        @click="$router.push({ name: 'Blog' })"
      >
        Back to Blog Page
      </button>
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
import router from "@/router";
export default defineComponent({
  name: "page",
  components: { loading },
  setup() {
    const route = useRoute();
    let blog = reactive({
      message: "",
      time: "",
      star: 0,
      _id: "",
      duration: "",
    });
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
        if (data.msg && data.msg === "404 not found") {
          router.push("/notFound");
        }

        Object.assign(blog, data[0]);
        const options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        const today = new Date(blog.time);
        blog.time = today.toLocaleDateString("en-US", options);
        loaded.value = true;
      }
    });
    return { blog, loaded };
  },
});
</script>
<style scoped>
.hljs {
  @apply overflow-x-auto;
}
.hljs > code {
  @apply whitespace-pre;
}
</style>
