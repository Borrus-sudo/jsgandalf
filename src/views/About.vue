<template>
  <div
    class="
      sm:py-9
      lg:py-10
      xl:py-10
      2xl:py-10
      py-14
      px-4
      sm:px-8
      md:px-10
      lg:px-12
      xl:px-20
      2xl:px-24
      space-y-4
    "
  >
    <h1 class="font-extrabold text-2xl underline tracking-wide">About me</h1>
    <div
      class="
        break-words
        leading-loose
        text-md
        xl:text-xl
        2xl:text-2xl
        text-gray-300
      "
    >
      JSGandalf(he/him) (a.k.a BorrisX) is a
      {{ year - 2006 }} year old self-taught junior full stack web developer
      (P.S. soon to be senior).He is also a game dev enthusiastic and a Potter
      head. He is the founder and CEO of JCorp that primarily focuses on
      improving <abbr title="developer experience">DX</abbr> of Vue developers.
      He is a staunch believer in the tagline "Don't be Dinesh!". His hobbies
      include: Chess, Pixel Art and exploring softwares. This website is built
      using TailwindCSS, Vuejs, Typescript and GraphQl and powered via Vercel.
    </div>
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
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const date = new Date();
    return { year: date.getFullYear() };
  },
});
</script>
