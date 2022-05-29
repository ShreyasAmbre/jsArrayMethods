// Obser the code and output and then understand the below description given

const numbers = [5, 4, 3, 2, 1];

var evenNumbersData = numbers.filter((element, index, arr) => {
    let evenNum = element % 2 == 0
    console.log("EVEB or NOT ==>", evenNum)

    return evenNum 
})

var evenNumbersData2 = numbers.map((element, index, arr) => {
    let evenNum = element % 2 == 0
    console.log("EVEB or NOT ==>", evenNum)

    return evenNum 
})

console.log("EVEB NUMBERS ==>", evenNumbersData)
console.log("EVEB NUMBERS ==>", evenNumbersData2)


/*
    No, the filter method doesn't return the unfiletered array. It returns an array containing the 
    items where the inner function returns true.

    As you are not returning a boolean value from the inner function, the value is converted to boolean, 
    so the object reference is converted to true. Thus, it returns a new array that contains all the items from the original array.

    The filter method doesn't do the same as the map method. The map method is used to convert each item of an array, 
    while the filter method is used to select certain items of an array. Comparing the performance between the methods is moot, as only one of them does what you want to do.
*/