
var invertTree = function(root)
{
    return swap( root );

    function swap(node)
    {

        if( node != null ) {
            if( node.left != null && node.right != null ) {
                var tmp    = node.left;
                node.left  = node.right;
                node.right = tmp;

                swap( node.left );
                swap( node.right );
            }
            else {
                if( node.left == null ) {
                    node.left  = node.right;
                    node.right = null;
                    swap( node.left );
                }
                else if( node.right == null ) {
                    node.right = node.left;
                    node.left  = null;
                    swap( node.right );
                }
            }
        }
        return node;
    }
};


