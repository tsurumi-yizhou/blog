<script setup>
import Theme from 'vitepress/theme'
import Comment from '../components/Comment.vue'

const { Layout } = Theme
</script>
<template>
  <Layout>
    <template #doc-after>
      <Comment />
    </template>
  </Layout>
</template>