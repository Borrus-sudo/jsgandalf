<template>
  <div class="flex flex-col">
    <app-navbar />
    <div class="mt-28"><router-view></router-view></div>
    <app-footer />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import navbar from "@/components/navbar.vue";
import footer from "@/components/footer.vue";
export default defineComponent({
  name: "App",
  components: { "app-navbar": navbar, "app-footer": footer },
});
</script>

