/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {//队列
  if(root==null) return true;
  let queue=[];
  queue.push(root.left); 
  queue.push(root.right);
  while(queue.length){
    let left = queue.shift();
    let right=queue.shift();
    if(left==null&&right==null){
      continue;//都为null跳过
    }
    if(left==null||right==null||left.val!=right.val){
      return false;
    }

    //push的时候可能把为null的节点push进去了
    queue.push(left.left)
    queue.push(right.right)

    queue.push(left.right)
    queue.push(right.left)
    
  }
  return true;
};
// @lc code=end

