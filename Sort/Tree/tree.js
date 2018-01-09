function Tree()
{
    this.root = null;
}

Tree.prototype.addValue = function(val)
{
    var node = new Node( val );
    if( this.root == null ) {
        this.root = node;
    }
    else {
        this.root.addNode( node );
    }

};

Tree.prototype.traverse = function()
{
    this.root.visit();
};

window.onload = function()
{
    var tree = new Tree();
    tree.addValue( 10 );
    tree.addValue( 1 );
    tree.addValue( 7 );
    console.log( 'tree:', tree );
    tree.traverse();
};