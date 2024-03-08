const fibonacci = function(index) {
    if (index < 0) return "OOPS";
    if (index == 0) return 0;
    let count = Number.parseInt(index);
    let prevValue = 0;
    let nextValue = 1;

    for (let i = 2; i <= count; i++){
        let current = prevValue + nextValue;
        prevValue = nextValue;
        nextValue = current;
    }
    return nextValue;
};

// Do not edit below this line
module.exports = fibonacci;
