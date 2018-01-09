
function Node(val)
{
    this.val = val;
    this.left = null;
    this.right = null;
}

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

Node.prototype.visit = function()
{
    if( this.left ) {
        this.left = visit();
    }
    console.log( 'left', this.left );
    if( this.right ) {
        this.right = visit();
    }

};

