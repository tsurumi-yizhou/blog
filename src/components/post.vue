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
    <a :href="link" class="card card-compact transition-all duration-200 hover:bg-base-200 hover:-translate-y-1">
        <div class="card-body">
            <h2 class="card-title">{{ title }}</h2>
            <p class="text-pretty font-light">
                {{ cut(description) }}
            </p>
            <div class="flex flex-wrap justify-between w-full">
                <p class="text-sm font-thin">
                    {{ date.toLocaleDateString("zh-CN") }}
                </p>
                <p class="text-sm font-thin">
                    {{ category }}
                </p>
            </div>
        </div>
    </a>
</template>
