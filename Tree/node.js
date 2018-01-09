

// ================================================

function Node(val)
{
    this.val = val;
    this.left = null;
    this.right = null;
}

Node.prototype.search = function(val)
{
    // console.log( 'hello' );
    if( this.val === val ) {
        // console.log( 'found : ' + val );
        return this
    }
    else if( val < this.val && this.left != null) {
        return this.left.search( val );
    }
    else if( val > this.val && this.right != null) {
        return this.right.search( val );
    }
    return null;
};


Node.prototype.visit = function()
{
    if( this.left != null ) {
        this.left.visit();
    }
    console.log( this.val );
    if( this.right != null ) {
        this.right.visit();
    }
};


Node.prototype.addNode = function(node)
{
    if( node.val < this.val ) {
        if( this.left == null ) {
            this.left = node;
        }
        else {
            this.left.addNode( node );
        }
    }
    else if( node.val > this.val ) {
        if( this.right == null ) {
            this.right = node;
        }
        else {
            this.right.addNode( node );
        }
    }
};


    var tree = new Tree();
    for( var i = 0; i < 10; i++ ) {
        tree.addNode( Math.floor( Math.random() * 100));
    }


    console.log( 'tree:', tree );
    tree.traverse();



