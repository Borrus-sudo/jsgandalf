<template>
  <div>
    <app-navbar />
    <div style="margin-top: 5.4rem">
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
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
<style scoped>
.slide-enter-from {
  transform: translateX(-50%);
  opacity: 0;
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-out;
}
.slide-leave-to {
  transform: translateX(50%);
  opacity: 0;
}
</style>
