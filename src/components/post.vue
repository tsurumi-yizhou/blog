<script setup lang="ts">
interface Props {
    title: string;
    link: string;
    description: string;
    date: Date;
}
const props = defineProps<Props>();
</script>

<template>
    <a :href="link">
        <div class="card card-compact shadow-lg p-5 my-3 mx-5 prose">
            <h2 class="card-title">{{ title }}</h2>
            <p class="h-16">{{ description }}</p>
            <div class="justify-start">
                <caption>
                    {{
                        date.toLocaleDateString("zh-CN")
                    }}
                </caption>
            </div>
        </div>
    </a>
</template>
