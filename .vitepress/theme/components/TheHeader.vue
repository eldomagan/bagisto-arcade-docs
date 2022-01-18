<script setup>
import { MoonIcon } from "@heroicons/vue/outline";
</script>

<template>
  <div class="h-1 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
  <header
    class="sticky top-0 z-40 border-b border-slate-900/10 dark:border-slate-50/[0.06]"
  >
    <div class="container flex flex-wrap items-center">
      <div class="mr-6 flex-none order-0">
        <a href="/">
          <span class="lg:hidden">Ba</span>
          <span class="hidden lg:inline">Bagisto Arcade</span>
        </a>
      </div>
      <nav class="flex flex-1 order-3 lg:order-1">
        <a href="/docs/" class="px-2 py-4">Guide</a>
        <a href="/docs/" class="px-2 py-4">API Reference</a>
        <a href="/docs/" class="px-2 py-4">Store</a>
        <a href="/docs/" class="px-2 py-4">Hire Us</a>
      </nav>
      <form class="flex-none w-96 order-1 lg:order-2 py-2">
        <input
          type="text"
          class="w-full py-1 lg:py-2 rounded-lg border-transparent bg-gray-100 px-4 dark:bg-slate-800"
          placeholder="Search"
        />
      </form>
      <nav
        class="flex-none flex items-center justify-end order-2 lg:order-3 ml-4 space-x-4"
      >
        <button>
          <moon-icon class="w-5 h-5" />
        </button>
        <button>
          <svg
            viewBox="0 0 16 16"
            class="w-5 h-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </button>
      </nav>
    </div>
  </header>
</template>
