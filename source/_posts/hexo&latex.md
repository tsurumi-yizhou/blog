---
title: hexo&latex
tags:
  - 博客
categories:
  - 博客
cover: cover.jpg
date: 2022-10-24 14:57:57
---
找了一圈如何在hexo中配置latex支持，其实非常简单。我是butterfly主题，只需要在其中的主题的_config.yml中这样配置：
```yml

# Math (數學)
# --------------------------------------
# About the per_page
# if you set it to true, it will load mathjax/katex script in each page (true 表示每一頁都加載js)
# if you set it to false, it will load mathjax/katex script according to your setting (add the 'mathjax: true' in page's front-matter)
# (false 需要時加載，須在使用的 Markdown Front-matter 加上 mathjax: true)

# MathJax
mathjax:
  enable: true
  per_page: true

# KaTeX
katex:
  enable: false
  per_page: true
  hide_scrollbar: true
```
另外，关于latex的语法，记录在下：
## 插入公式
### 行中公式：
```latex
$ 公式 $
```

### 独立公式：
```latex
$$ 数学公式 $$
```

### 自动编号公式
```latex
\begin{equation}
数学公式
\label{eq:当前公式名}
\end{equation}
```