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
      <div>
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
        >
          📌Pinned Projects
        </h1>
        <img
          src="https://github-readme-stats.vercel.app/api/pin/?username=Borrus-sudo&repo=rapide-structs&theme=monokai"
        />
        <br />
        <img
          src="https://github-readme-stats.vercel.app/api/pin/?username=Borrus-sudo&repo=awesome-stack&theme=monokai"
          alt=""
        />
        <br />
        <img
          src="https://github-readme-stats.vercel.app/api/pin/?username=Borrus-sudo&repo=jsgandalf&theme=monokai"
          alt=""
        />
      </div>
      <div v-for="(project, id) in data.projects" :key="id">
        <card
          :title="project.name.split('/')[1]"
          :content="project.description || 'Random joke:nothing'"
          :meta="svg + project.url"
          :url="project.url"
          :stars="0"
        />
      </div>
    </div>
    <div v-else class="flex justify-center mt-10">
      <loading />
    </div>
  </div>
</template>
<script>
import { defineComponent, watch, ref } from "vue";
import data from "@/utils/fetchProjects";
import loading from "@/assets/MdiLoading.vue";
import card from "@/components/card.vue";
export default defineComponent({
  name: "Project",
  components: { loading, card },
  setup() {
    const loaded = ref(data.projects.length != 0 ? true : false);
    const svg = `<svg class="inline mr-1" width="1em" height="1em" viewBox="0 0 24 24"><path d="M10.59 13.41c.41.39.41 1.03 0 1.42c-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0a5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24a2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0a5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24a2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24a.973.973 0 0 1 0-1.42z" fill="currentColor"></path>
  </svg>`;
    watch(data.projects, () => {
      loaded.value = true;
    });
    return { loaded, data, svg };
  },
});
</script>
