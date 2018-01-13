let Node = function(value, x, y)
{
    this.left  = null;
    this.right = null;
    this.val   = value;
    this.x     = x;
    this.y     = y;
};

Node.prototype.addNode = function(val)
{
    let node = new Node( val );
    if( val > this.val ) {
        if( this.right == null ) {
            this.right = node;
            this.right.x = this.x + 50;
            this.right.y = this.y + 20;
        }
        else {this.right.addNode( val );}
    }
    else if( val < this.val ) {
        if( this.left == null ) {
            this.left = node;
            this.left.x = this.x - 50;
            this.left.y = this.y + 20;
        }
        else {this.left.addNode( val );}
    }
};

Node.prototype.traverse = function(parent)
{
    if( this.left != null ) {
        this.left.traverse();
    }
    console.log( 'this.val = ', this.val );

    fill( 255 );
    noStroke(this);
    textAlign(CENTER);
    text( this.val, this.x, this.y );
    stroke( 255 );
    noFill();
    ellipse( this.x, this.y - 5, 30, 30 );
    line( parent.x, parent.y, this.x, this.y );

    if( this.right != null ) {
        this.right.traverse(this);
    }
};

Node.prototype.search = function(val)
{
    if( this.val === val ) {
        return this.val;
    }
    else if( val > this.val && this.right != null ) {
        return this.right.search( val );
    }
    else if( val < this.val && this.left != null ) {
        return this.left.search( val );
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
        this.root.x = width / 2;
        this.root.y = 30;
    }
    else {
        this.root.addNode( val );
    }
};

Tree.prototype.traverse = function()
{
    this.root.traverse(this.root);
};

Tree.prototype.searchVal = function(val)
{
    return this.root.search( val );
};

// =============================================

