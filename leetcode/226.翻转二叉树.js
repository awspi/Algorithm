/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {//BFS
  if(root==null) return root;
  let queue =[];
  queue.push(root);


  while(queue.length){
    let len=queue.length;
    while(len--){
      let node=queue.shift();//层次遍历到一个节点,就把他的子节点颠倒
      [[node.left],[node.right]]=[[node.right],[node.left]];
      node.left&&queue.push(node.left);
      node.right&&queue.push(node.right);
    }
  }
  return root;
};
// @lc code=end

