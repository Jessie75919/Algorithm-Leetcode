function TreeNode(val)
{
    this.val  = val;
    this.left = this.right = null;
}

var bigT1    = new TreeNode( 1 );
bigT1.left      = new TreeNode( 3 );
bigT1.right     = new TreeNode( 2 );
bigT1.left.left = new TreeNode( 5 );

var bigT2      = new TreeNode( 2 );
bigT2.left        = new TreeNode( 1 );
bigT2.right       = new TreeNode( 3 );
bigT2.left.right  = new TreeNode( 4 );
bigT2.right.right = new TreeNode( 7 );


var mergeTrees = function(t1, t2)
{
    console.log( JSON.stringify( t1, null, 4 ) );
    console.log( JSON.stringify( t2, null, 4 ) );
    console.log( '===== bigT1 =====' );
    console.log( JSON.stringify( bigT1 , null, 4 ) );
    console.log( '===== bigT1 =====' );
    if( !t1 ) return t2;
    if( !t2 ) return t1;
    t1.val += t2.val;

    t1.left  = mergeTrees( t1.left, t2.left );
    t1.right = mergeTrees( t1.right, t2.right );

    return t1;

};


var x = mergeTrees( bigT1, bigT2 );

console.log( x );