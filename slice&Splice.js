/*
    Slice method doesnt change the original array, 
    Need to provide the start and ending index
*/

const numbers = [7, 5, 6, 3, 8];

// when we specify end index value slice method take value previous to end index
// when we specify start index slice method takes cuurent value of start index

var sliceNum = numbers.slice(2, 4)
// var sliceNum = numbers.slice(-3)
// var sliceNum = numbers.slice(-4, -1)

console.log("SLICED NUMS", sliceNum)
console.log("SLICED NUMS NOT MODIFIED ORIGINAL ARRAY WHEN USING SLICE", numbers)

// ***********************************************************************************************

/*
    SLICE method modifies ORIGINAL ARRAY
    Slice method is used for REMOVE or REPLACE or ADD elements inside array
    
    It take parameters as :-  starting index, count, new element which will get replaced (option element if ww only want to remove element)    
 
*/

numbers.splice(3, 1)
console.log("SPLICE ARRAY REMOVED ELEMENT and ORIGINAL ARRAY MODIFIED", numbers)

numbers.splice(1, 1, 10)
console.log("SPLICE ARRAY ORIGINAL ARRAY MODIFIED", numbers)

// starting index 2, removing element 0, pushing two element in array on mention starting index which is 2
numbers.splice(2, 0, 18, 11)
console.log("SPLICE ARRAY ELEMENTS PUSH 2 index ONWARDS", numbers)