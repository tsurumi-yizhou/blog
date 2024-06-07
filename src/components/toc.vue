<script setup lang="ts">
import { ref } from "vue";

interface Link {
  depth: number,
  slug: string,
  text: string
}
interface Props {
  links: Link[]
}
const props = defineProps<Props>()
const active = ref(props.links[0].slug)
const boundaries = props.links
    .map(link => {
      return {
        slug: link.slug,
        top: document.getElementById(link.slug)?.offsetTop??0,
        height: document.getElementById(link.slug)?.offsetHeight??0,
      }
    })
window.addEventListener("scroll", () => {
  const scrollTop = document.scrollingElement?.scrollTop || document.body.scrollTop
  for (const boundary of boundaries) {
    if (scrollTop >= boundary.top && scrollTop <= boundary.top + boundary.height) {
      active.value = boundary.slug
      return;
    }
  }
  const end = boundaries[boundaries.length - 1]
  if (scrollTop >= end.top + end.height) {
    active.value = end.slug;
    return;
  }
  const start = boundaries[0]
  if (scrollTop <= start.top) {
    active.value = start.slug;
    return;
  }
}, {
  passive: true
})
</script>

<template>
  <ul class="menu">
    <li>
      <h2 class="menu-title">On this page</h2>
      <ul class="menu">
        <li v-for="link in links">
          <a v-on:click="active = link.slug" :class="{'active': active==link.slug}" :href="`#${link.slug}`">
            <h3 class="font-mono">{{ link.text }}</h3>
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>
