<template>
  <div
    class="
      sm:py-9
      lg:py-10
      xl:py-10
      2xl:py-10
      py-14
      px-4
      sm:px-10
      md:px-12
      lg:px-12
      xl:px-24
      2xl:px-24
      space-y-4
    "
  >
    <h1 class="font-extrabold text-2xl underline tracking-wide">
      <slot name="header"></slot>
    </h1>
    <div
      style="line-height: 1.8"
      class="
        break-words
        text-sm
        sm:text-md
        md:text-md
        xl:text-lg
        2xl:text-lg
        text-gray-300
      "
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>
