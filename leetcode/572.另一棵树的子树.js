/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
  if(root==null) return subRoot==null;//如果root为null,sub也为空返回true

const compare=(p,q)=>{
  if(p==null&&q==null) return true;
  if(p==null||q==null||p.val!=q.val) return false;
  
  //剩下的就是p.val==q.val的情况
  // if(p.val==q.val) return true;
  let left=compare(p.left,q.left);
  let right=compare(p.right,q.right);
  return left&&right;//都相等返回true
}

if(compare(root,subRoot)) return true;
  return isSubtree(root.left,subRoot)||isSubtree(root.right,subRoot)

};
// @lc code=end

