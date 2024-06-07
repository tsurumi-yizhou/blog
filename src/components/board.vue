<script setup lang="ts">
import { ref } from 'vue';
import Post from "./post.vue";
interface Post {
    title: string,
    description: string,
    category: string,
    date: Date,
    link: string
}
interface Props {
    categories: string[],
    posts: Post[]
};
const props = defineProps<Props>();
const current = ref(props.categories[0]);
</script>

<template>
    <div class="flex">
        <div class="w-64 my-3">
            <ul class="menu rounded-box">
                <li class="menu-title">Categories</li>
                <li v-for="category in categories" v-on:click="current = category">
                    <a v-if="current == category" class="active">{{ category }}</a>
                    <a v-if="current != category">{{ category }}</a>
                </li>
            </ul>
        </div>

        <div class="w-3/4">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <Post v-for="post in props.posts.filter(post => post.category == current)" :title="post.title"
                    :link="post.link" :description="post.description" :date="post.date" />
            </div>
        </div>
    </div>
</template>
