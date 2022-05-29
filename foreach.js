/*
Purpose of forEach method is used to iterate through array it work similar as for loop but its more fast then for loop
*/

const arrData = [5, 4, 3, 2, 1];

arrData.forEach((element, index, arr) => {
    console.log("Elememt ===>", element)
})


// WAP to count the number of letters present in array 
// input = data = ["a", "b", "c", "a", "b", "d", "a"]
// output = {a : 3, b : 2, c : 1, d : 1}