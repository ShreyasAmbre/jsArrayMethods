/*
    JOIN method creats a new string from array by concatinating all the elements from an array

    By default it uses COMMA ( , ) as a seprator
*/

const name = ['SHREYAS', 'SHRIKANT', 'AMBRE']

let c = name.join()

console.log("JOIN VALUES", name.join('-'))
console.log("JOIN VALUES", name.join(' '))
console.log("JOIN VALUES", name.join(', '))
console.log("JOIN VALUES", name.join(' , '))
console.log("JOIN VALUES", name)
console.log("JOIN VALUES", c)
