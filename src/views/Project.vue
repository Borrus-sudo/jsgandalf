<template>
  <BaseLayout>
    <template v-slot:header>📌Pinned Projects</template>
    <template v-slot:content>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div class="px-4">
          <img
            src="https://github-readme-stats.vercel.app/api/pin/?username=Borrus-sudo&repo=awesome-stack&theme=monokai"
            alt=""
          />
          <br />
        </div>
        <div class="px-4">
          <img
            src="https://github-readme-stats.vercel.app/api/pin/?username=Borrus-sudo&repo=jsgandalf&theme=monokai"
            alt=""
          />
          <br />
        </div>
        <div class="px-4">
          <img
            src="https://github-readme-stats.vercel.app/api/pin/?username=Borrus-sudo&repo=rapide-structs&theme=monokai"
          />
          <br />
        </div>
        <div class="px-4">
          <img
            src="https://github-readme-stats.vercel.app/api/pin/?username=Borrus-sudo&repo=vue-generator-graph&theme=monokai"
            alt=""
          />
        </div>
      </div>
    </template>
  </BaseLayout>
</template>
<script>
import BaseLayout from "@/layouts/BaseLayout.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Project",
  components: { BaseLayout },
});
</script>
