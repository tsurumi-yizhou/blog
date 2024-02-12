import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// @ts-ignore
import PostLayout from "../../layouts/PostLayout.vue";

import 'gitalk/dist/gitalk.css'

const theme: Theme = {
    ...DefaultTheme,
    Layout: PostLayout
}

export default theme