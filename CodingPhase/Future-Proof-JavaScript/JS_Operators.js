// An example of an operator
/* Example*/ var x = 20;
/* the Equal sign is what is known as the assignment operator. Don't confuse this with a math equals sign, but instead think of it as I am 
giving the variable named "x" a VALUE of 20.*/

//Math Operators
+ //Addition
- //Subtraction
* //Multiplication
'/' //Division *This normally does not have stars, however due to syntax I had to put it there to add my comment after.*
% // Modulus
++ // Increment
-- // Decrement

// Assignment Operators
= //See the above on lines 1-4
+= // A short hand version of saying x = x + y, or in other words adds a value to a variable.
-= // A short hand version of saying x = x - y, or in other words subrtracts a value to a variable.
*= // A short hand version of saying x = x * y, or in other words multiplies a value to a variable.
'/=' // A short hand version of saying x = x / y, or in other words divides a value to a variable.
%= // A short hand version of saying x = x % y

// String Operators
txt1 = 'John';
txt2 = 'Doe';
txt 3 = txt1 + " " + txt2;
/* As we discussed before, any text that is coupled inside of single or double quotes is known as a string. In order to compile multiple strings together 
in ES5 is what is known as concatenation (to concatenate is to combine). What you would do above is create two variables with strings as the values,
you then add those two with the math operator and anywhere you need a space, you will add " " as shown above. The resulting outcome of this example is 
'John Doe'. *If you do not add the space, then you would've gotten 'JohnDoe'.* */
// You can concatenate numbers and strings too!!

// Comparison Operators
== // Equal to
=== // Equal value AND equal type
!= // Not equal
!== // Not equal value nor equal type
> // Greater than
< // less than
>= // Greater than or equal to
<= // Less than or equal to 
? // Ternary operator

// Logical Operators
&& // Logical and
|| // Logical or
! // Logical not