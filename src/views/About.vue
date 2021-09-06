<template>
  <BaseLayout>
    <template v-slot:header>About me</template>
    <template v-slot:content>
      <div>
        Hi I am JSGandalf (a.k.a BorrisX or Borrus-sudo), 15 year old junior
        full stack web dev. (P.S. soon to be senior). I am game dev enthusiastic
        and a Potter head. I am the founder and CEO of JCorp that primarily
        focuses on improving DX of Vue developers. I am a staunch believer in
        the tagline "Don't be Dinesh!".
        <br />🔭 I’m currently planning to work on a long term project which I
        hope gets a surrounding community. <br />🌱 I’m currently planning to
        learn Golang. <br />😄 Pronouns:he/him <br />⚡ Fun fact:Open a repo and
        append '1s' after github and before .com in the URL to get the VS Code
        view of the repo <br />📫 How to reach me: BorrisX#2830 on discord
        <br />(P.S.) Please mind my commit messages 😅 This website is built
        using TailwindCSS, Vuejs, Typescript and GraphQl and powered via
        Netlify.
      </div>
      <br />
      <div>
        <img
          src="https://github-readme-stats.vercel.app/api?username=Borrus-sudo&show_icons=true&theme=monokai"
        />
        <br />
        <img
          src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Borrus-sudo&theme=monokai"
          class="border-white border rounded-md"
          alt=""
        />
        <br />
        <MdiAwesomeStack />
      </div>
      <br />
      <button
        class="
          bg-transparent
          hover:bg-indigo-500
          text-blue-700
          font-semibold
          hover:text-white
          px-2
          border border-blue-500
          hover:border-transparent
          rounded
          w-30
          h-8
        "
      >
        Sponsor me
      </button>
    </template>
  </BaseLayout>
</template>
<script>
import { defineComponent } from "vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
import MdiAwesomeStack from "@/assets/MdiAwesomeStack.vue";
export default defineComponent({
  setup() {
    const date = new Date();
    return { year: date.getFullYear() };
  },
  components: { BaseLayout, MdiAwesomeStack },
});
</script>
