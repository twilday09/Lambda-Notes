// Integer Methods

.toFixed() // Used to say how many places past the decimal you want to display. 
/*Example*/ 
a = 33.345345346365
a.toFixed(2);
console.log(a);
//Returns 33.34 because we set the position to 2.

.toString() // Allows you to take a value and convert it to a sting
/*Example*/ 
a.toString();
console.log(a);
//Returns "33.345345346365" which is now read as a string vs a raw number in our JS file.

Number() // Can be used to convert JavaScript variables to numbers
/*Example*/ 
Number(true); // Returns 1
Number(false); // Returns 0
Number("10"); // Returns 10
Number("John") // Returns NaN (AKA Not a Number)

/* There are MANY different Integer methods but as you begin JS, the above are the most common. Others an be found on resources such as:
-MDN
-W3 Schools