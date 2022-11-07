---
title: C语言关键字处理规则
date: 2022-10-26 00:10:31
tags:
- c++
- 编译原理
categories:
- code converter
cover: cover.jpg
---
ANSI C中的关键字一共有32个。由于python更加高级，其中某些关键字是用不到的。下面我将对32个关键字进行分类与剖析。

## 数据类型关键字
### 基本类型
void char int float double

这些事基本类型，在python中都是number，不作区分。

### 类型修饰
short long signed unsigned

同上。

### 复杂类型关键字
#### struct
在python中为class。

#### union
union是用来用不同的方式操作同一块内存，在python中没有这样细粒度的内存操作手段。需要我们自己实现。

#### enum
在python3.7中引进了枚举，我们可以像实现struct一样予以实现。

#### typedef
就是给一种类型一个别名。

#### sizeof
python中直接用len函数。

## 流程控制关键字
### 跳转结构
return，continue，break都一样。至于goto，python中不支持。好在goto即使在C中也是一种禁忌。

### 分支结构
#### if\else
只需要去除括号，修改逻辑运算符即可。

#### switch\case
最新的python3.10中上线了match-case机制，和其他动态语言类似，比C更加高级。写法几乎一样。

#### default
这个在match-case机制中用case _ 实现。

### 循环结构
### for\do\while
在C中，for有三个语句，起始、终结和每次循环时执行的。

python之中只支持在一个数组中遍历元素。因此，我们可以将其改写成while的形式。也就是
```python
init();
while not should_end():
    do_something()
    self_add()
```

## 运算符
### 三元运算符
```C
A ? B : C;
```
在python中，可以写为
```python
if A:
    return B
else:
    return C
```

### 逻辑运算符
！：not，&&：and，|| : or

## 定义
### 函数
在C中，定义函数必须处理类型信息。在python中则无需。

提取函数名、参数列表并加上def即可。

### 数组
在C中可以定义任意类型、任意维度的数组。在python中则需要通过一些小技巧。


