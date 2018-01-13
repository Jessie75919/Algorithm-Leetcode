function setup()
{
    createCanvas( 600, 400 );
    background( 51 );

    var tree = new Tree();


    for( var i = 0; i < 100; i++ ) {
        tree.addValue( Math.floor( Math.random() * 100));
    }


    console.log( 'tree:', tree );
    tree.traverse();
}


function draw()
{
    
}