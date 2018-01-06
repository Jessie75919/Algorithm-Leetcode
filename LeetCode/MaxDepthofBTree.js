 // Definition for a binary tree node.
 function TreeNode(val) {
    this.val   = val;
    this.left  = null;
    this.right = null;
}

var maxDepth = function (root) {
   return find(root);
   function find (node)
   {
       if (node == null) {
           return 0;
       }

       var RDeep = 1 ;
       var LDeep = 1 ;

       if (node.left != null) {
           LDeep += find(node.left);
       }

       if (node.right != null) {
           RDeep += find(node.right);
       }

       return LDeep > RDeep ? LDeep : RDeep;
   }
};