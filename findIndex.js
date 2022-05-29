/*
    findeIndex() method find the element onside the array and return the index of that element

    if element is not find it will return the undefined
*/



let persons = ["SHRIKANT", "SHREE", "MAI", "DADA", "SUJATA"];



let indexOfPerson = persons.findIndex((element, index, Array) => {
    return element === "MAI"
}) 

console.log("INDEX OF FINDED PERSON is ==> ", indexOfPerson)