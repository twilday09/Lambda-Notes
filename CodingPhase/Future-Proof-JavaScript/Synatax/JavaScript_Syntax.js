//Example syntax layout
var box = 'honda civic';
/*The above is a basic layout for what is known as a variable. A variable is a box that is given a name that you put data into and then can be called
later simply by its variable name. Also, note that their is a  ; at the end of the above statement. Due to modern JS forms, it is not neccisarily needed
however, the general concensious in the community is that a ; is used to let another developer know that you have finnished a statement*/

//Comments
/* Comments are created in one of two ways:
1) // - Two back slashes are typed when writing out single line comments.
2) /* - This is used when you want to create a multiple line comment and the end of the comment is followed by '* /'

IMPORTANT *Comments are NOT ran by the code and are simply bypassed.*
*/

//What is an expression
var apples = 5;
apples * 20; 
/* A expression is whenever you use a value and a number/operator (Think of the term Mathimatical expression).*/
//Example
var a = 20;
var b = 10:
var c = a + b;

//IMPORTANT *JavaScript is indeed Case Sensitive!!*
//Example
var carName = 'honda';
var carname = 'bmw';

console.log(carName);
//Returns 'honda'
console.log(carname);
//Returns 'bmw'
/*The reason for the above is that when calling on any type of variable (or anything for that matter), you have to match the name exactly how it is
written in your calling (in this case we did console.log()).

//Case Types

//Snake Case
/*Example*/ snake_case
//Camel Case
/*Example*/ camelCase
//Casing syntax is typically user or company preference