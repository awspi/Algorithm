# Js刷题笔记

## 链式操作



## forEach



## ...

```js
 arr.push([...path]);//深拷贝
```



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

### 计次循环

```js
let curLen=10,times=0;
while(curLen--){
    times++;
}
console.log(times)
//输出结果
//10
```



## &&

`*expr1* && *expr2* `

If expr**1** can be converted to true, returns expr**2**; else, returns expr**1**.

```js
for(ar of arr){ar==' '&&count++}
```

a() && b() :如果执行a()后返回true，则执行b()并返回b的值；如果执行a()后返回false，则整个表达式返回a()的值，b()不执行；

```js
return  Math.abs(dfs(root.left)-dfs(root.right))<=1&&isBalanced(root.left)&&isBalanced(root.right);
```



```
        if(node.left){
            if(traversal(node.left,sum-node.left.val)) return true;
          //因为把sum - node.left->val 直接作为参数传进去，函数结束，count的数值没有改变。
        }
      //效果一样,代码更简洁
      	if(node.right&&traversal(node.right,sum-node.right.val)) return true;
        return false;
```



```
 return  left !== null&&left; //不为null就返回
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



### .slice

```
arr.slice([begin[, end]])
```

`begin` 可选

提取起始处的索引（从 `0` 开始），从该索引开始提取原数组元素。如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，`slice(-2)` 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。

如果省略 `begin`，则 `slice` 从索引 `0` 开始。如果 `begin` 超出原数组的索引范围，则会返回空数组。

`end` 可选

提取终止处的索引（从 `0` 开始），在该索引处结束提取原数组元素。

`slice` 会提取原数组中索引从 `begin` 到 `end` 的所有元素（包含 `begin`，但不包含 `end`）。**[begin,end)**

`slice(1,4)` 会提取原数组中从第二个元素开始一直到第四个元素的所有元素 （索引为 1, 2, 3的元素）。如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 `slice(-2,-1)` 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。

如果 `end` 被省略，则 `slice` 会一直提取到原数组末尾。如果 `end` 大于数组的长度，`slice` 也会一直提取到原数组末尾。

### slice实现字符串指定位置插入

```js
 let str="abcdefg"
 str=str.slice(0,5)+'要插入的字符'+str.slice(5)//插入到下标为5的位置
//'abcde要插入的字符fg'
```



### 单调队列

```js
 class MonoQueue {
  queue;
  constructor() {
    this.queue = []; //双向队列 pop push  shift unshift 都可以用
  }
  enqueue(value) {//enqueue，在队尾加入元素 value,但是要把前面比新元素小的元素都删掉
    let back = this.queue[this.queue.length - 1]//最后一位的元素
    while (back!==undefined && back < value) {//注意back==0的情况
      this.queue.pop()
      back = this.queue[this.queue.length - 1]//更新
    }
    this.queue.push(value)
  }
  dequeue(value) {// dequeue，队头元素如果是value，删除它
    if(this.front()==value) {
      this.queue.shift();
    }
  }
  front() {//返回第一位元素(最大值)
    return this.queue[0];
  }
}
```



## Map

set has get要结合使用

<img src="https://cdn.nlark.com/yuque/0/2022/png/25531662/1648796715252-b821ae97-66e7-4d31-a9c6-427fcf7aab6b.png" alt="img" style="zoom:67%;" />



map.has(x) 和x in map 不一样

![QQ20220405-082359@2x](/Users/wsp/Documents/Algorithm/img/QQ20220405-082359@2x.png)

![QQ20220405-082419@2x](/Users/wsp/Documents/Algorithm/img/QQ20220405-082419@2x.png)

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

