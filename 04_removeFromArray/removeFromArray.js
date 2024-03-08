const removeFromArray = function(array, ...elementsToDelete) {
    const arrayResult = [];

    mainSearch:
    for (let i = 0; i < array.length; i++){
        let addElement = true;
        for (element of elementsToDelete){
            if (array[i] === element){
                addElement = false;
                continue mainSearch;
            }
        }

        if(addElement){
            arrayResult.push(array[i])
        }
    }
    return arrayResult;
};

/*
create empty array
iterate through the given array, comparing each element to the element to be deleted.
if it should not be deleted, it is added to the empty array
return the new array

function takes two arrays. Any duplicate elements between the two arrays should be excluded
need to iterate through the first array and compare with every element in the second array
if the element of the first array does not equal any element in the second array, add that element
*/

// Do not edit below this line
module.exports = removeFromArray;
