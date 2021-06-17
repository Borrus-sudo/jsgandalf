<template>
  <teleport to="body">
    <footer
      style="font-family: 'PT Serif', serif"
      class="mt-auto flex flex-col border-t p-2 border-gray-600"
      id="footer"
    >
      <ul class="flex justify-center space-x-5">
        <a href="" target="_blank"> <instagram /></a>
        <a href="https://github.com/Borrus-sudo" target="_blank"> <github /></a>
        <a href="" target="_blank"> <discord /></a>
        <a href="https://twitter.com/BorrisX006" target="_blank">
          <twitter
        /></a>
        <a href="https://www.twitch.tv/deathchargrocks21" target="_blank">
          <twitch
        /></a>
      </ul>
      <div class="text-center">
        &copy; JSGandalf {{ new Date().getFullYear() }}. Made with VueJS 💚.
      </div>
    </footer>
  </teleport>
</template>
<script>
import { defineComponent } from "vue";
import MdiDiscord from "@/assets/MdiDiscord.vue";
import MdiGithub from "@/assets/MdiGithub.vue";
import MdiTwitter from "@/assets/MdiTwitterBox.vue";
import MdiInstagram from "@/assets/MdiInstagram.vue";
import MdiTwitch from "@/assets/MdiTwitch.vue";

export default defineComponent({
  name: "footer",
  components: {
    github: MdiGithub,
    discord: MdiDiscord,
    twitter: MdiTwitter,
    instagram: MdiInstagram,
    twitch: MdiTwitch,
  },
});
</script>
