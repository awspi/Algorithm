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

### Array.from()

字符串转数组

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

