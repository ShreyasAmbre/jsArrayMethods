/*
    indexOf() methods is used to return the index of element present in array

    IMP :- If element is not present inside the array it return -1
*/


let companies = ["BMW", "AUDI", "YAMAHA", "TATA", "PORCHE", "DUCATI"]

console.log(`INDEX OF ${companies[2]} is :- `, companies.indexOf("TATA"))

/*
    lastIndexOf() method return the last index of element from an array if the element are present multiple times in array

    IMP :- If element is not present inside the array it return -1
*/


let companies2 = ["BMW", "AUDI", "BMW", "TATA", "PORCHE", "DUCATI"]
console.log("LAST INDEX FO ELEMENT ", companies2.lastIndexOf("BMWW"))

// WAP to swap an element from inside the array