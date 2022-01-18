<template>
  <div class="flex h-screen flex-col">
    <the-header class="flex-none" />
    <div class="flex-1">
      <div class="container flex h-full">
        <aside
          class="flex-none w-64 border-r dark:border-slate-50/[0.06]"
        ></aside>
        <section class="flex-1"></section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
</script>
