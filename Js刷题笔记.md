# Js刷题笔记



## while

`()`内的内容会先执行一次再到`{}`

```js
let left=0,right=10;
while(left++<right--){
  console.log(left,right)
}
//输出结果
//1 9
//2 8
//3 7
```



## &&

`*expr1* && *expr2* `

If expr**1** can be converted to true, returns expr**2**; else, returns expr**1**.

```js
for(ar of arr){ar==' '&&count++}
```



## Array

文档 *https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array*

- pop()
  - **删除数组末尾的元素**
- shift()
  - **删除数组头部元素**
- unshift()
  - **添加元素到数组的头部**
- push()
  - **添加元素到数组的末尾**
- indexOf()
  - **找出某个元素在数组中的索引**



### Array.from()

字符串转数组



## Map

set has get要结合使用

<img src="https://cdn.nlark.com/yuque/0/2022/png/25531662/1648796715252-b821ae97-66e7-4d31-a9c6-427fcf7aab6b.png" alt="img" style="zoom:67%;" />



## [arr[l], arr[r]] = [arr[r], arr[l]]

**不需要中间量进行交换**

```js
let arr=[0,1,2,3,4,5,6];
let l=0,r=arr.length-1;
while(l<r){
        [arr[l], arr[r]] = [arr[r], arr[l]]
        l++;
        r--;
}
//输出
//[6, 5, 4, 3, 2, 1, 0]
```

