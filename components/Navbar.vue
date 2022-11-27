<script setup lang="ts">
interface Link {
  name: string,
  href: string,
  target?: string,
}

const links: Link[] = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Download', href: 'https://github.com/jschmidt92/sog-launcher/releases/latest', target: '_blank' },
  { name: 'Knowledge Base', href: '/knowledgebase' }
]
</script>

<template>
  <div class="bg-black">
    <header class="container mx-auto">
      <nav class="flex justify-center sm:justify-end items-center h-20 px-4">
          <ul class="flex items-center space-x-4">
            <li v-for="(n, i) in links" :key="`navLink-${String(i)}`">
              <NuxtLink class="nav-link text-white" :to="n.href" :target="n.target">{{ n.name }}</NuxtLink>
            </li>
          </ul>
      </nav>
    </header>
  </div>
</template>

<style scoped>
.nav-link.router-link-active.router-link-exact-active {
  @apply text-white;
  text-shadow: 0 0 0.25em theme('colors.sky.400'), 0 0 0.25em theme('colors.black');
}
.nav-link {
  @apply uppercase font-semibold text-lg text-gray-100;
}
.nav-link:hover {
  @apply text-white;
  text-shadow: 0 0 0.25em theme('colors.sky.400'), 0 0 0.25em theme('colors.black');
}
</style>
