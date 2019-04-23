//alert("Hello World");
// document.getElementById("button").onclick = function() {
//     document.getElementById("confirm").innerHTML = "Order placed. Check email for confirmation";
//     document.getElementById("button").style.display = "none";
// }
var username = prompt(); // username is the identifier, = is the assignment operator
//alert(username);
console.log(username);

var age = 5; // try from inspect -> console window.age
var newAge = age; // copy value (will see pass by value vs pass by reference)
console.log(age);
var message = "newAge = " + newAge; // this is an expression
console.log(message);
// variables get attached to the window object, so from inspect console > window shows the Window object 
// which lists all of the vars

// window object is also known as the global scope and can be accessed from anywhere.

(function() {
// IIFE = immediately invoked function expression
// the content in here is not in the global scope
    var oldAge = 90; //  make sure var is used otherwise oldAge will be in the global scope
    someAge = 30; // not var therefore keep going up the scope hierarchy, ends up in the global scope.
})();

if (age == 5) { // variables assigned inside {} other than function are block level variables
    let newAge = 6; 
    const anyAge = 7;
    var noAge = 8; // var expects to be in a function, therefore noAge ends up on the global scope
}

{
    // this is a block
}

// functions and arrays are objects
// string, number, boolean, null, undefined and symbol are all immutable (can only be one type) primitives

// object example, always key value pairs
let person = {
    name: "Caleb", // name: is a property
    age: 93,
    favFood: "Pizza...",
    fun: function() {
        console.log("Yay!");
    }
}

person.fun();
