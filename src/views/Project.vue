<template>
  <div>Project</div>
</template>
<script>
import { defineComponent } from "vue";
import projects from "@/utils/fetchProjects";
export default defineComponent({
  name: "Project",
  setup() {
    console.log(projects);
  },
});
</script>
