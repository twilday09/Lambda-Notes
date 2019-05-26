//JavaScript-I

/* Goals to learn
1) Use function declarations, expressions, and arrow functions and describe their differences
2) Use let, const, var and demonstrate their differences
3) Create and use object literals as well as describe object properties and methods
4) Create and use arrays as well as array properties and array methods

Basic Function Syntax
    Basic function sare made of several key parts:
        1) The function keyword
        2) The name of the function
        3) An optional list of parameters
        4) The statements inside the block of code { }
/*Example syntax*/
function add(a, b) {
    return a + b;
}
/* In order for the function to actually run, you need to perform an invocation or Invoke the function which can be done by calling its name and
using () after, as shown below.*/
console.log(add(2,4))


//Function Invocation, Arguments, and Parameters
/*When we invoke a function, like the one shown above, we often pass in values. These values are known as arguments. In the example above would be
2 and 4. They are then received into the paramenters of the function, a & b in the order they were called.
Arguments are values passed into functions that receive them as parameters.*/

//The return Statement
//When you see return in a block of code, note that anything after that statement will NOT execute as the return terminates the function.
function add(a,b){
    return a + b;
    //Anything after a return wont execute
    console.log('You will never see this code!');
}
console.log(add(2,4)) 

//Function Declaration Hoisting
/*JavaScript operates using a two-pass compiler emaning that the first pass is setting up references to all of our code, and the second pass applies
the values to the references that we found. Function declarations are defined in the first pass and then are added to the top of the execution order
which is known as "Hoisting", meaning that function declarations can be invoked before they are defined.*/
console.log(add(2,4))

function add(a, b){
    return a + b;
}
//IMPORTANT- Hoisting is only applicable to function declarations and NOT function expressions or arrow functions.

//Function Expressions
/*Function Expression Syntax differs from a declaration via the following:
1) A variable that is used to store the function for later use
2) Anonymous functions can be used
3) Function expressions are NOT hoisted. They can only be invoked AFTER a definition has been placed in the execution stack.
/*Example*/
const add = function(a,b){
    return a + b;
}
console.log(add(2,4));
//The function above does not have a direct name, which is called a anonymous function. 
//In the example above, this makes sense as the variable add is paired with a Const so this feature won't be used or changed at any point later.

//Arrow Function Expressions
//Arrow functions allow us a shorthand way to write a function expression however it does NOT have access to the 'this' keyword.
/*Example function expression syntax*/
/* const add = function(a,b) {
    return a + b;
}

Example arrow function syntax*/
const add = (a,b) => {
    return a + b;
}
console.log(add(2,4));
/*The primary difference here is that we removed the 'function' keyword and then added => behind the parameters. Arrow functions allow us to heavily
streamline our code, for example:*/
const add = (a,b) => a + b;
console.log(add(2,4));
//Since the above only uses ONE return statement, the return is then implied and the { } are removed as well to reduce redundancy.

/*When NOT to use arrow functions
-Event Handlers(Unless they are inside a class constructor!)
-Object Methods
-Prototype methods
-Anytime you need to use arguments Object
*/

//Learn to use let, const and var and demonstrate their differences
/* var at one point was the only way to establish a variable in JS, however since the creation of ES6, we now have access to others as well. Below
gives you the rules associated to each*/

var // Commonly used, however can be overrided if the same var name is used again.
/* Example */
var name = 'Batman';
var name = 'Robin';
console.log(name); // --> prints 'Robin'

let // A variable creator that can NOT be overridden, however it is muteable meaning that we can change the VALUE, just not the name.
/* Example */
let name = 'Batman';
name = 'Robin'
console.log(name) --> 'Robin';

const //Lets you declare a variable and make its associated data constant and unlike let, const is immutable (cannot mutate)

//Learn to create and use object literals as well as describe object properties and methods
//Everything in and of itself in JavaScript is by default, an object. An object is a way to store data and give access when needed to said data.
/* Example */
const myPersonalObject = {
    firstName: 'Fred', 
    lastName: 'Flinstone',
};
//Aboe we have what is known as key: value pairs which are properties. In this example, the key's would be firstName and lastName and the values would be the strings attached.

//Dot Notation
//This is a method for referencing and extracting the data in an object using a '.'.
/* Example */
myPersonalObject.firstName // --> 'Fred'
//Bracket Notation
//This is a method for referencing and extracting the data in an object using a '[]'.
myPersonalObject['firstName'] // --> 'Fred'

//Object values can be changed (mutated) simply by accessing them, such as below, and adding in a new value to the key pair.
myPersonalObject.firstName = 'Wilma'

//You can extract the data of an object to an array using different methods, such as shown below;
.keys() //Returns the keys in a array from the object associated
const keys = Object.keys(myPersonalObject); // --> ['firstName', 'lastName'];
.values() // Returns the values in a array from the object associated
const values = Object.values(myPersonalObject); // --> ['wilma', 'Flinstone'];
.entries() // Gives us back an array of the Object's key/value pairs as a group
const entries = Object.entries(myPersonalObject); // --> [['firstName', 'Wilma'], ['lastName', 'Flinstone']]

//Practice!!
const myObject = {
    firstName: 'Joshua',
    lastName: 'Vandergriff', 
    age: 24, 
    homeTown: 'Chicago', 
    favoriteColor: 'Black',
};

console.log(Object.values(myObject));
console.log(Object.keys(myObject));
console.log(Object.entries(myObject));
