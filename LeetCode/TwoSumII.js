var numbers = [2, 7, 11, 15],
    target = 22;

var twoSum = function (numbers, target) {
    if (numbers == null || numbers.lenght < 2) {
        return numbers[0];
    }

    var left = 0,
        right = numbers.length - 1;

    while (left < right) {
        var total = numbers[left] + numbers[right];
        if (total > target)
            right--;
        else if (total < target)
            left++;
        else
            return [left+1, right+1];
    }
};

var ans = twoSum(numbers, target);
console.log(ans);