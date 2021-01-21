"use strict";
function squareNSum(numbers) {
    var sum = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var n = numbers_1[_i];
        sum += n * n;
    }
    console.log(sum);
}
squareNSum([1, 2, 3]);
