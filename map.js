/*
    Array mep method excecute given function on 
    every elements from an array an RETURN A NEW ARRAY 
*/

const numbers = [5, 4, 3, 2, 1];

var doubltNumbers =numbers.map((ele, index, arr) => {
    let val = ele * 2
    return val
})

console.log("DOUBLES VALUES ==>", numbers) 
// as u can see in output original array values are not change 
// because it return a new array because of that we save each return value 
// in new array return  named as above doubltNumbers

console.log("DOUBLES VALUES ==>", doubltNumbers) 



// WAP given below
/* input => 
 const data = [
    {name: "Dell", price:100, count: 2},
    {name: "HP", price:200, count: 1},
    {name: "Asus", price:150, count: 3},
]

output => 
const totalPriceData = [
    {name: "Dell", totalPrice:200},
    {name: "HP", totalPrice:200},
    {name: "Asus", totalPrice:450},
]
*/


// WAP given below convert number from string to numbers
/*
    input = ['12', '13', '2', '4', '11']
    output = [12, 13, 2, 4, 11]
*/