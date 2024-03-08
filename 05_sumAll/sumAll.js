const sumAll = function(smallNum, largeNum) {
    if (!Number.isInteger(smallNum) || !Number.isInteger(largeNum) || smallNum < 0 || largeNum < 0) {
        return "ERROR";
    }

    // ensure smallNum and largeNum have proper relationship
    if (smallNum > largeNum) {
        largeNum = [smallNum, smallNum = largeNum][0];
    }

    let sum = 0;
    for (i = smallNum; i <= largeNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
