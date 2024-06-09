<script setup lang="ts">
import { ref } from "vue";
import type { Post } from "./post.vue";
import PostCard from "./post.vue";

interface Props {
    category: string;
    posts: Post[];
}

const props = defineProps<Props>();
const category = ref(props.category);

window.addEventListener("category", (event) => {
    category.value = event.detail;
});
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2">
        <PostCard
            client:load
            v-for="post in posts.filter((post) => post.category == category)"
            :title="post.title"
            :date="post.date"
            :description="post.description"
            :link="post.link"
            :category="post.category"
        />
    </div>
</template>
