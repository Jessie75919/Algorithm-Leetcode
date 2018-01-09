// var num = [3, 2, 1, 5, 8, 9, 6, 4];
var num = [33,2,11,35,58,93,62,42];

var persons = [
    {
        "name": "john",
        "age" : "23"
    },
    {
        "name": "harry",
        "age" : "41"
    },
    {
        "name": "jack",
        "age" : "35"
    },
    {
        "name": "ali",
        "age" : "15"
    },
    {
        "name": "juc",
        "age" : "5"
    },
    {
        "name": "Jessie",
        "age" : "30"
    },
    {
        "name": "Joe",
        "age" : "85"
    }
];


// insertionSortAsc(num);
// console.log(num);
function insertionSortAsc(num) {
    for (var i = 0; i < num.length; i++) {
        for (var j = 1; j <= i; j++) {
            var rightIndex = 0;
            var temp = 0;
            // search the number bigger than me
            rightIndex = i - j
            // console.log("i = " + i);
            if (num[rightIndex] >= num[rightIndex+1]) {
                temp = num[rightIndex+1];
                num[rightIndex+1] = num[rightIndex];
                num[rightIndex] = temp;
            }
            // search the number smaller than me
            else{
                break;
            }
            // console.log(num);
        }
        // console.log('inside', num);
    }
}

function insertionSortDesc(num) {
    for (var i = 0; i < num.length; i++) {
        for (var j = 1; j <= i; j++) {
            var rightIndex = 0;
            var temp = 0;
            // search the number bigger than me
            rightIndex = i - j
            // console.log("i = " + i);
            if (num[rightIndex] <= num[rightIndex+1]) {
                temp = num[rightIndex+1];
                num[rightIndex+1] = num[rightIndex];
                num[rightIndex] = temp;
            }
            // search the number smaller than me
            else{
                break;
            }
            // console.log(num);
        }
        // console.log('inside', num);
    }
}

// insertionSortDesc(num);
// console.log(num);

function personInsertionSortAsc(num) {
    for (var i = 0; i < num.length; i++) {
        for (var j = 1; j <= i; j++) {
            var rightIndex = 0;
            var temp = 0;
            rightIndex = i - j
            if (parseInt(num[rightIndex].age) >= parseInt(num[rightIndex+1].age)) {
                temp = num[rightIndex+1];
                num[rightIndex+1] = num[rightIndex];
                num[rightIndex] = temp;
            }
            else break;
        }
    }
}

console.log(persons);
personInsertionSortAsc(persons);
console.log(persons);

