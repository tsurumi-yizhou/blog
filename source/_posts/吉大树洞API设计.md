---
title: 吉大树洞API设计
date: 2023-01-09 22:08:08
tags:
- 吉大树洞
categories:
- 编程
cover: /img/吉大树洞API设计/cover.jpg
---
### 发帖系统
资源：/post
#### method: GET
获取资源。参数为postid，数字。

返回值是一个json对象数组，每个元素就是帖子的一层楼。
| key | value |
|----|----|
|name| string|
|src|inner html|
#### method: PUT
发帖。参数如表所示。
| key | value |
|----|----|
|name| string|
|src|inner html|
name是匿名名称。需要在前端进行富文本编辑，存储为innerhtml格式。

#### method: POST
创建帖子。
| key | value |
|----|----|
|title|标题|
|category|分类|
|tag|标签，为一个字符串，用逗号隔开|

### 首页
资源：/title
#### method: GET
获取一个json对象列表。
| key | value |
|----|----|
|title|标题|
|category|分类|
|tag|标签|

若加参数为tag=xxx，则检索所有此标签的帖子。同理有category。

### 用户系统
此系统考虑hack接入学校cas。
