<script setup lang="ts">
interface Link {
  depth: number,
  slug: string,
  text: string
}
interface Props {
  links: Link[]
}
const props = defineProps<Props>()
</script>

<template>
  <ul class="menu">
    <li>
      <h2 class="menu-title">On this page</h2>
      <ul>
        <li v-for="link in links">
          <a :href="`#${link.slug}`">{{ link.text }}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>

</style>
