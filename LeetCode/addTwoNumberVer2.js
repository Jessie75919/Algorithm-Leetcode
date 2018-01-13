function ListNode(val) {
    this.val = val;
    this.next = null;
}

ListNode.prototype.addNode = function (node) {
    if (!this.next) {
        this.next = node;
    } else {
        this.next.addNode(node);
    }
}


var v1 = new ListNode(8);
v1.addNode(new ListNode(9));
v1.addNode(new ListNode(9));


var v2 = new ListNode(2);

console.log(JSON.stringify(v1, null, 2));
console.log(JSON.stringify(v2, null, 2));

console.log("=================================");

function length(node) {
    var leng = 0
    if (node) {
        leng += 1;
        return leng += length(node.next)
    } else {
        return leng
    }
}


var addTwoNumbers = function (l1, l2) {
    var big = length(l1) > length(l2) ? l1 : l2;
    var sm = length(l1) > length(l2) ? l2 : l1;
    return add(big, sm);

};

function add(l1, l2) {
    if (!l1 && !l2) return null;
    if (!l1) return l2;
    if (!l2) return l1;

    var sum = l1.val += l2.val;
    carry(l1, sum)
    add(l1.next, l2.next);
    return l1;
}

function carry(l1, sum) {
    if (sum >= 10) {
        if (l1.next) {
            if (l1.next.val + 1 >= 10) {
                carry(l1.next, l1.next.val + 1);
            } else {
                l1.next.val += 1
            }
        } else {
            l1.next = new ListNode(1);
        }

        l1.val = sum % 10;
    } else {
        l1.val = sum;
    }
}

var node = addTwoNumbers(v1, v2);

console.log(JSON.stringify(node, null, 2));