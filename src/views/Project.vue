<template>
  <div>Project</div>
</template>
<script>
import { defineComponent, watch } from "vue";
import data from "@/utils/fetchProjects";
export default defineComponent({
  name: "Project",
  setup() {
    watch(data.projects,()=>{
     console.log(data.projects);
    });
  },
});
</script>
