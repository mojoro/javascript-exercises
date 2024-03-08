const palindromes = function (string) {
    string = string.toLowerCase();
    const palArr = Array.from(string);
    const palFilter = palArr.filter(char => {
        const charCode = char.charCodeAt(0);
        if ((charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57)) {
            return true;
        }
    });
    const palFilterReverse = palFilter.reverse();
    
    const palFilterStr = palFilter.reduce((total, nextChar) => total += nextChar);
    const palFilterReverseStr = Array.from(palFilterStr).reverse().join('');
    if (palFilterStr === palFilterReverseStr) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
