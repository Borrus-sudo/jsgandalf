<template>
  <div class="py-10 px-10">
    <div class="space-y-10">
      <div v-if="loaded"></div>
      <div v-else class="flex justify-center mt-10">
        <loading />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, watch, ref } from "vue";
import data from "@/utils/fetchProjects";
import loading from "@/assets/MdiLoading.vue";
export default defineComponent({
  name: "Project",
  components: { loading },
  setup() {
    const loaded = ref(data.projects.length != 0 ? true : false);
    watch(data.projects, () => {
      loaded.value = true;
    });
    return { loaded };
  },
});
</script>
