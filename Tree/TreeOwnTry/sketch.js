function setup()
{
    createCanvas( 600, 400 );
    background( 51 );

    let tree = new Tree();

    for( let i = 0; i < 8; i++ ) {
        let x = Math.floor( Math.random() * 100 );
        tree.addNode( x );
    }

    tree.addNode( 3 );
    console.log( 'tree :', JSON.stringify( tree, null, 2 ) );
    tree.traverse();
}


function draw()
{
    
}