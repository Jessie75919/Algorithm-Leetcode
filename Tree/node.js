// ================================================

function Node(val, x, y)
{
    this.val   = val;
    this.left  = null;
    this.right = null;
    this.x     = x;
    this.y     = y;
}

Node.prototype.search = function(val)
{
    // console.log( 'hello' );
    if( this.val === val ) {
        // console.log( 'found : ' + val );
        return this
    }
    else if( val < this.val && this.left != null ) {
        return this.left.search( val );
    }
    else if( val > this.val && this.right != null ) {
        return this.right.search( val );
    }
    return null;
};


Node.prototype.visit = function(parent)
{
    if( this.left != null ) {
        this.left.visit( this );
    }
    console.log( this.val );

    fill( 255 );
    noStroke();
    textAlign('center');
    text( this.val, this.x, this.y );
    stroke( 255 );
    noFill();
    ellipse( this.x, this.y-5, 20, 20 );
    line( parent.x, parent.y, this.x, this.y );
    if( this.right != null ) {
        this.right.visit( this );
    }
};


Node.prototype.addNode = function(node)
{
    if( node.val < this.val ) {
        if( this.left == null ) {
            this.left   = node;
            this.left.x = this.x - 100;
            this.left.y = this.y + 20;
        }
        else {
            this.left.addNode( node );
        }
    }
    else if( node.val > this.val ) {
        if( this.right == null ) {
            this.right   = node;
            this.right.x = this.x + 100;
            this.right.y = this.y + 20;
        }
        else {
            this.right.addNode( node );
        }
    }
};






