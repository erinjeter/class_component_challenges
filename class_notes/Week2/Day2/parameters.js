
let x = 5;
let y = 6;

function add2(num1, num2){
    let total = num1 + num2
    console.log(`${num1} + ${num2} = ${total}`);
}

add2(x,y);
add2(7,10);


/*
CHALLENGE
************
    - Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/

function intro(firstName, lastName){
    let fullName = firstName + " " + lastName;
    console.log(`Hello, my name is ${fullName}`);
}

intro('Erin', 'Jeter');