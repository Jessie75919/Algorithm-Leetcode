// Definition for a binary tree node.
/*
 function TreeNode(val)
 {
 this.val  = val;
 this.left = this.right = null;
 }
 */


var maxDepth = function(root)
{
    return traverse( root );
};

var traverse = function(node)
{
    if( node == null ) {
        return 0;
    }

    var depth_R = 1,
        depth_L = 1;

    if( node.left != null ) {
        depth_L += traverse( node.left );
    }

    if( node.right != null ) {
        depth_R += traverse( node.right );
    }

    return depth_L > depth_R ? depth_L : depth_R;

};