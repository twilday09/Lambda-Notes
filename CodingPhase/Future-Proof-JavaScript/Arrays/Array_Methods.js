/* Just like strings, arrays have a compound list of accessible array methods. Below are just some tidbit examples
of those you would use in a every day work space.*/

.push()// Adds a new value to the end of your array.
var fruits = ['apple', 'banana', 'grape']
console.log(fruits)
//Will just return our initial array: var fruits = ['apple', 'banana', 'grape']
fruits.push('strawberry')
console.log(fruits)
///Will return our original array plus the new value: var fruits = ['apple', 'banana', 'grape', 'strawberry']

.pop() // Removes the last item in an array.
fruits.pop()
console.log(fruits)
//Will remove strawberry from our array and now return our original array: var fruits = ['apple', 'banana', 'grape']

.splice() // Removes values from the array based on start and end index locations.
fruits.splice(1,1)
console.log(fruits)
/*Will remove banana from our array as we started the removal at [i] position 1 and ended it at position 1.
var fruits = ['apple','grape']*/

.length // Returns the ammount of items inside the array.
fruits.length;
console.log(fruits);
//Will return 2 since we only have 2 data types in our array currently.

.toString() // Converts the values of an array to a string.
var newFruits = ['banana', 'orange', 'apple', 'mango'];
newFruits.toString()
console.log(newFruits);
// Will return the values as strings and eliminates the square brackets. 

.shift() // Removes the first array element and "shifts" all other elements to a lower [i] position.
newFruits.shift();
console.log(newFruits);
/*Returns our new array that has now shifted the position of the items:
['orange', 'apple', 'mango']
Now orange is in [i] 0, apple is in [i] 1 and mango is in [i] 2. */

.unshift() // Adds a new element to an array (at the beginning), and "unshifts" older elements.
newFruits.unshift('peach');
console.log(newFruits);
/*We now get our array with a new added value and now our [i] positions are back at the beginning stage.
['peach', 'orange', 'apple', 'mango'];*/

.slice() /* Slices out a piece of an array into a new array. Just like splice, it can take in start and end
(end is NOT included in the new array) paramenters.*/
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2,4));
//Returns: ['camel, 'duck'] in a new array. 