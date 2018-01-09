let Node = function(value)
{
    this.left  = null;
    this.right = null;
    this.val   = value;
};

Node.prototype.addNode = function(val)
{
    let node = new Node( val );
    if( val > this.val ) {
        if( this.right == null ) {this.right = node;}
        else                     {this.right.addNode( val );}

    }
    else if( val < this.val ) {
        if( this.left == null ) {this.left = node;}
        else                    {this.left.addNode(val);}
    }
};

Node.prototype.traverse = function()
{
    if( this.left != null ) {
        this.left.traverse();
    }
    console.log( 'this.val = ' , this.val );

    if (this.right != null){
        this.right.traverse();
    }
};

Node.prototype.search = function(val)
{
    if( this.val === val ) {
        return this.val;
    }
    else if( val > this.val && this.right != null) {
        return this.right.search(val);
    }
    else if( val < this.val && this.left != null) {
        return this.left.search(val);
    }
    return null;
};


// =====================================

let Tree = function()
{
    this.root = null;
};

Tree.prototype.addNode = function(val)
{
    let node = new Node( val );
    if( !this.root ) {
        this.root = node;
    }
    else {
        this.root.addNode( val );
    }
};

Tree.prototype.traverse = function()
{
    this.root.traverse();
};

Tree.prototype.searchVal = function(val)
{
    return this.root.search( val );
};

// =============================================

let tree = new Tree();

for( let i = 0; i < 8; i++ ) {
    let x = Math.floor( Math.random() * 100 );
    tree.addNode( x );
    console.log( x );
}

tree.addNode( 3 );

console.log( 'tree :', JSON.stringify( tree, null, 2 ) );

tree.traverse();
console.log( tree.searchVal( 31 ) );