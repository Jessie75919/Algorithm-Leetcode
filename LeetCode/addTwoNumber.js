function ListNode(val) {
    this.val = val;
    this.next = null;
}

var xx = [2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9]
var yy = [5,6,4,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9,9,9,9]


var v1 = new ListNode(2);
v1.next = new ListNode(4);
v1.next.next = new ListNode(3);

var v2 = new ListNode(5);
v2.next = new ListNode(6);
v2.next.next = new ListNode(4);

ListNode.prototype.addNode =function ( parentNode, node ) {

    if (!parentNode.next) {
        parentNode.next = node;
    }else{
        parentNode.next.addNode(parentNode.next,node);
    }
}



var addTwoNumbers = function (l1, l2) {

    if (!l1 && !l2) return null;

    var n1 = convertNum(unbox(l1)) + convertNum(unbox(l2));
    

    return box(n1);

};

function add (arr1, arr2) {

    var temp = arr1.length > arr2.length ? arr1 : arr2 ;


    for (let i = 0; i < newArr.length; i++)
    {

    }

    return
}


function unbox(node) {
    var box = [];
    traverse(node);
    function traverse(node) {
        box.unshift(node.val);
        if (node.next)
            traverse(node.next);
    }
    return box;
}

function convertNum(arr) {
    var str = new String;
    arr.forEach(ele => {
         str += ele;
    });

    return parseInt( str );
}

function box (num) {

    var str = (num + "").split("");
    console.log(str);

    var node = null ;




    for (let i = str.length-1; i >= 0; i--) {
        if ( node==null ) {
            node = new ListNode(parseInt(str[i]));
            // console.log(node);
        }
        else {
            node.addNode( node ,  new ListNode(parseInt(str[i])));
            // console.log(node);
        }
    }

    // console.log(JSON.stringify( node , null , 2));
    return node;
}

var node = addTwoNumbers(v1, v2);
console.log(JSON.stringify( node , null , 2));