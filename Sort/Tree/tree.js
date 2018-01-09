
function Tree()
{
    this.root = null;
}


Tree.prototype.addNode = function(val)
{
    var node = new Node( val );
    if( this.root == null ) {
        this.root = node;
    }
    else {
        this.root.addNode( node );
    }

};


Tree.prototype.searchVal = function(val)
{
    var found = this.root.search(val);
    return found;

};


Tree.prototype.traverse = function()
{
    this.root.visit();
};

