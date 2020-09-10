let assert = require("chai").assert;
let expect = require("chai").expect;

function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}


describe("sum", function () {
    it("should return NaN if is not a number", function () {
        assert.isNaN(sum(['a', 1, 3]));
    });
});

console.log(sum(['a', 1, 2]))