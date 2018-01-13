function TreeNode(val)
{
    this.val  = val;
    this.left = this.right = null;
}

var t1       = new TreeNode( 1 );
t1.left      = new TreeNode( 3 );
t1.right     = new TreeNode( 2 );
t1.left.left = new TreeNode( 5 );

var t2         = new TreeNode( 2 );
t2.left        = new TreeNode( 1 );
t2.right       = new TreeNode( 3 );
t2.left.right  = new TreeNode( 4 );
t2.right.right = new TreeNode( 7 );


var mergeTrees = function(t1, t2)
{

    if( !t1 && !t2 ) return null;

    var val     = (t1 == null ? 0 : t1.val) + (t2 == null ? 0 : t2.val);
    console.log( 'val = ' , val );
    var newNode = new TreeNode( val );
    
    

    newNode.left  = mergeTrees( t1 == null ? null : t1.left, t2 == null ? null : t2.left );
    newNode.right = mergeTrees( t1 == null ? null : t1.right, t2 == null ? null : t2.right );


    return newNode;


};


var x = mergeTrees( t1, t2 );

console.log( x );