<script setup lang="ts">
import { cut } from "../utils/text";
export interface Post {
    title: string;
    link: string;
    description: string;
    date: Date;
    category: string;
}
const props = defineProps<Post>();
</script>

<template>
    <div class="p-5 mx-3 mb-3 bg-base-100 shadow-xl rounded-box">
        <a :href="link">
            <h2 class="card-title">{{ title }}</h2>
            <p class="text-pretty">
                {{ cut(description) }}
            </p>
        </a>
        <div class="flex flex-wrap justify-between w-full">
            <span class="text-sm font-thin">
                {{ date.toLocaleDateString("zh-CN") }}
            </span>
            <span class="text-sm font-thin">
                {{ category }}
            </span>
        </div>
    </div>
</template>
