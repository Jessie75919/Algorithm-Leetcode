/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    return x^y;

};


var x = hammingDistance(1,4);
var y = parseInt(x, 10).toString(2);

console.log(y);

console.log(x);