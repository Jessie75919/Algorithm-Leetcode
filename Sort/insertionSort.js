// var num = [3, 2, 1, 5, 8, 9, 6, 4];
var num = [33,2,11,35,58,93,62,42];
console.log(num);

insertionSort(num);

function insertionSort(num) {
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
console.log(num);