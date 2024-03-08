const reverseString = function(string) {
    let split = string.split('');
    let reversed = [];
    for (char of split){
        reversed.unshift(char);
    }
    return reversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
