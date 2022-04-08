/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

  const compare=(p,q)=>{
    if(p==null&&q==null) return true;
    if(p==null||q==null||p.val!=q.val) return false;
    
    //剩下的就是p.val==q.val的情况
    // if(p.val==q.val) return true;
    let left=compare(p.left,q.left);
    let right=compare(p.right,q.right);
    return left&&right;//都相等返回true
    
  }
  return compare(p,q);

};
// @lc code=end

