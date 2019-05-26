//JavaScript-II
/* Goals to learn
1) Describe what closure is, how closure is created in a program and why it is important
2) Demonstrate the proper use of a callback function by passing a function to another as a parameter
3) Demonstrate ability to use .map(), .reduce() and .filter() and describe their use cases

//Learn to describe what a closure is, how it is created and why it is important
/*Closure can often be refered to as an Enclosure, meaning when refrenced, you want to focus on everything in that "house". This concept is called 
Scope, to which you have Global Scope and Local Scope.
/* Closure example*/
const foo = 'bar';
function returnFoo () {
    return foo;
}
returnFoo();
//-> Reaches outside its scope to find foo because it doesn't exist inside of return Foo's scope when foo is referenced
//The function body (code inside refurnFoo) has access to the outside scope (code outside of returnFoo) and can access that 'foo' variable.

//Learn to demonstrate the proper use of a callback function by passing it to another function as a parameter
/* Example */
const functionFeeder = function(callback) {
    callback('Hello from the inside of Function Feeder');
};
/*What we are doing is created a function called "functionFeeder" and passed a parameter called "callback" and when invoked, supplies us with the actions
associated to the callback (which is the string) within the function.