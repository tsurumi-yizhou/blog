<script setup lang="ts">
import { ref } from "vue";

interface Props {
    categories: string[];
}

const props = defineProps<Props>();
const current = ref(props.categories[0]);

function click_handler(name: string) {
    current.value = name;
    const event = new CustomEvent("category", { detail: name });
    window.dispatchEvent(event);
}
</script>

<template>
    <ul class="hidden md:block menu rounded-box">
        <li class="menu-title">Categories</li>
        <li v-for="category in categories" @click="click_handler(category)">
            <a :class="{ active: current == category }">{{ category }}</a>
        </li>
    </ul>
    <div class="flex flex-wrap md:hidden">
        <div
            class="btn mx-3 my-1"
            :class="{ 'btn-neutral': current == category }"
            v-for="category in categories"
            @click="click_handler(category)"
        >
            {{ category }}
        </div>
    </div>
</template>
