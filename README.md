Here we have learn Array methods given below which is in Javascript


1. forEach()
parameters of method    : array.forEach((element, index, array) => {})
parameters of callback  : -
What it return          : -
Purpose                 : it is used when we want to loop through every element in array 
                        (similar to for loop but forEach is little efficient)

2. map()
parameters of method    : array.map(callbackFun) // it takes callbackfunction
parameters of callback  : callbackFun(element, index, array)
What it return          : it return a new array it does not modifies the original array
Purpose                 : It is use when we want to perform some operation on every element in array and 
                        modified element should get store in new array then we can use this map() method


3. filter()
parameters of method    : array.filter(callbackFun) // it takes callback function
parameters of callback  : callbackFun(element, index, array)
What it return          : it return a only element which passes the given condition (when it return true) in  
                        callback function and store in a new array, It does not modifies the original array.
Purpose                 : as the name suggest FILTER it is used when we want only element to get store 
                        in new array which passes the condition. When callback function return false it continues 
                        the loop and does not store that element in new array because it return false on condition.

4. reduce()
parameters of method    : array.reduce(callbackFun, initialValue) // it takes callbackfunction and Initial Value (optional parameter)
                        initialValue = 0 (It can be zero) If we didnt give by default reduce() will take 1st element of array.
parameters of callback  : callbackFun(accumulator, element, index, array) // Here accumulator is add on parameterin callback function
                        which store the previous value to get commpute to coming element
What it return          : it return a a single computed value which we have to store in another variable and ORIGINAL array is safe.
Purpose                 : It is use when we want add all the value of element, it uses when we want the previous element reference 
                        to get compute next level

5. slice()
parameters of method    : array.slice(starting index, ending index) 
parameters of callback  : -
What it return          : it return a new array and original array is safe.
Purpose                 : It is use when we want remove some element from specific index to end index


6. splice()
parameters of method    : array.splice(starting index, count of how much element want to remove, element to get replace or add in array) 
parameters of callback  : -
What it return          : It modifies the ORIGINAL ARRAY, and return a modified array
Purpose                 : It is use when we want remove or replace or add some element from specific index in array.

7. sort()
parameters of method    : arrayOfString.sort() // when we are sorting string sort() does not take any parameters But,
                        arrayOfNumber.sort(callbackfunction) when we are sorting number it takes callback function
parameters of callback  : callbackFunction(a, b){} // here a is first element and b is second element of array to compare 
                        and get sorted
What it return          : IT returns MODIFIES the ORIGINAL array with SORTED MANNER.
Purpose                 : It is use when we want sort the element.


8. concat()
parameters of method    : array1.concat(array2 to get concat) // it take one array as parameter which we want to concat to first array
parameters of callback  : -
What it return          : It return new ARRAY with merged value of two array. It does not MODIFIES ORIGINAL ARRAY.
Purpose                 : It is use when we want merge the element of two array.


9. fill()
parameters of method    : array.fill(value which should get filled, start index from where value will start getting filled, end indes) 
                        // It takes 3 parameters :-  value which should get filled inside array, start index, end index
parameters of callback  : -
What it return          : It return same array with MODIFIES ORIGINAL ARRAY.
Purpose                 : It is use when we want to fill the value where we want in the array. Basically when we we have details of persons
                        and person forget to fill the value in that form their we can fill the (NONE, NAN, Not A Value)


10. include()
parameters of method    : array.include(value to check whether it present in array or not) // it takes only one parameter
parameters of callback  : -
What it return          : It return boolean value true or false. ORIGINAL Array is safe
Purpose                 : It is use when we want to check value is present or not inside the array and return boolean value.


11. join()
parameters of method    : array.join('-') // it takes only one parameter which we can specify which seprator we want to use  
                        by default it use comma
parameters of callback  : -
What it return          : It return join . ORIGINAL Array is safe
Purpose                 : It is use when we want to join the element of array, but in concat we join the two arrays not 
                        the element of arrays.


12. reverse()
parameters of method    : array.reverse()
parameters of callback  : -
What it return          : It MODIFIES ORIGINAL array.
Purpose                 : It is use when we want reverse the array elements.

13. push()
parameters of method    : array.push(element) // It take one parameter which we want to push to array.
parameters of callback  : -
What it return          : It return the new length of the array. It MODIFIES ORIGINAL array, Element is always push to end os the array
Purpose                 : It is use when we want add the element at the end of the array

14. pop()
parameters of method    : array.pop()
parameters of callback  : -
What it return          : It return the removed element. It MODIFIES ORIGINAL array. ELement is remove always from the end of the array
Purpose                 : It is use when we want remove the element at the end of the array and return removed element

15. unshift()
parameters of method    : array.unshift(element)
parameters of callback  : -
What it return          : It return the new length of the array. It MODIFIES ORIGINAL array, Element is always push at start os the array
Purpose                 : It is opposite of push() it add the element at the start of the array and return length of array

16. shift()
parameters of method    : array.shift()
parameters of callback  : -
What it return          : It return the removed element. It MODIFIES ORIGINAL array. ELement is remove always at start of the array
Purpose                 : It is opposite of pop() it add the element at the start of the array and return removed element

17. every()
parameters of method    : array.every(callbackFun) // it takes callbackfunction
parameters of callback  : callbackFun(element, index, array)
What it return          : it return a boolean value, It return TRUE only when condition given in callback funciton 
                        inside passes from each and every element of array only then it will return TRUE else it will return false
Purpose                 : It is use to check every element in array passes the given condition mention in callback funciton.

18. some()
parameters of method    : array.some(callbackFun) // it takes callbackfunction
parameters of callback  : callbackFun(element, index, array)
What it return          : it return a boolean value, It return TRUE when condition given in callback funciton 
                        passes atleast of the element from array only then it will return TRUE else it will return false
Purpose                 : It is use to check atleast one of the element in array passes the given condition mention in callback funciton. 
                        it is opposite of every() method.

19. indexOf()
parameters of method    : array.some(element) // it takes element as parameter to check the index of element inside array
parameters of callback  : -
What it return          : it return a interger value, Index of given element. 
Purpose                 : It is use to get the index of element so that we can remove or replace the element on specific 
                        index or any other operationwe can perform based on requiremet.

20. lastIndexOf()
parameters of method    : array.some(element) // it takes element as parameter to check the index of element inside array
parameters of callback  : -
What it return          : method return the last index of element from an array if the element are present multiple times in array
                        If element is not present it return -1
Purpose                 : It is use to get the index of last element so that we can remove or replace the element on specific 
                        index or any other operation we can perform based on requiremet.

21. find()
parameters of method    : array.find(callbackfun) // it takes callbackFun
parameters of callback  : callbackFun(element, index, array)
What it return          : If the element is present it return the element or else it will return UNDEFINED
Purpose                 : It is use to search the element inside the array

22. findIndexOf()
parameters of method    : array.findIndexOf(callbackfun) // it takes callbackFun
parameters of callback  : callbackFun(element, index, array)
What it return          : If the element is present it return the index of element or else it will return UNDEFINED
Purpose                 : It is use to search the index of element inside the array.

23. from()

