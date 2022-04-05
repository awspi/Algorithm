    /**
    * @param {number[]} nums
    * @param {number} k
    * @return {number[]}
    */

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
  
      var maxSlidingWindow = function(nums, k) {
          let queue=new MonoQueue();
          let res=[];
          let i=0,len=nums.length;
          //滑动窗口(滑动的是单调队列)
          for(i;i<len;i++){
              if(i<k-1){//先填满窗口的前 k - 1    k=3 {0,1,2}=3个
                  queue.enqueue(nums[i]);//加入新的元素
              }else{// 满了窗口向前滑动
                  //注意顺序,先加入,在找最大值,最后再删除 ,不然刚加入就删了
  
                  queue.enqueue(nums[i]);//加入新的元素
                  res.push(queue.front());//res加入当前最大值
                  queue.dequeue(nums[i-k+1])//删除先加入的元素 从0开始
                  //(如果还在里面的话肯定就是在front的位置是最大值
                  //要不就已经在加入新元素的时候被压缩了)
                  
              }
          }
          return res;
      };

console.log(maxSlidingWindow([1,3,1,2,0,5],3));