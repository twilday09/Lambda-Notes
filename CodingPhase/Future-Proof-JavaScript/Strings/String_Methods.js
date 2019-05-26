//String Methods

.length // A method that adds up all the character spaces of a string (spaces are included)
/*Example*/
var myName = 'Joe Santos Garcia'
myName.length; // This would return 17 as that is how many characters & spaces are in our string.

/*Use case example*/
if(myName.length > 140) {
    console.log('Sorry is to long')
} else {
    console.log('We posted your name on twitter')
};

.toUpperCase() // Converts the string to all uppercase letters.
/*Example*/
myName.toUpperCase() // Returns 'JOE SANTOS GARCIA'
/* IMPORTANT - .toUpperCase is what is known as a function theirfore, you need to have () after the method.*/

.slice() /* Extracts a part of a string and returns the extracted part into a new string but implementing 2 parameters which are
a start and a end character.*/
/*Example*/
var str = 'Apple, Banana, Kiwi';
var res = str.slice(7, 13); //The results would be 'Banana'.
/*With the above, we took the variable str and applied the method .slice with a start character point of 7 (which is the 
    space right before banana) and a end character point of 13 (which is right after banana) and it then cuts everything 
    before or equal to 7 out as well as including and after 13.*/
    /* IMPORTANT - for strings, JavaScript starts the first character at 1 and counts up. You can slice with negatives, 
    however all that means is that the position is counted from the end of the string to the beginning.*/

    /*Again, like many actions in vanilla JavaScript, there are many different methods to which strings have access
    to. As soon as you see a "." after a string, you know that now it has immediate access to a wide array of use case methods.
    Go ahead and look up in W3Schools or MDN to see what kind of methods you can find and use!
    