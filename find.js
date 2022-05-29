/*
    find() method will search inside the array and it will return first element
    for which callback funciton return true for the value
    
    if value is not find the array it will return UNDEFINED  
*/


var nums = [11, 7, 5, 3, 2];

var presentData = nums.find((element, index, array) => {
    return element == 11
})

console.log("ELEMENT PRESENT IN ARRAY OR NOT ==>", presentData)


var presentData2 = nums.find((element, index, array) => {
    return element == 100
})

console.log("ELEMENT PRESENT IN ARRAY OR NOT ==>", presentData2)


// WAP create array of object with name and age of person and finf the person is present or not
//  and is yes return only age of that person