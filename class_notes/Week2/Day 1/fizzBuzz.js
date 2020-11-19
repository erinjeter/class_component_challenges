//Challenge
//Create a variable names FB that takes numbers
//Write a conditional that:
//Prints out "Fizz" if the number is divisible by 3
//Prints out "Buzz" if the number is divisible by 5
//Prints out "Fizz Buzz" if the number is divisible by BOTH and 5
//use an else if, a switch, and a ternary


let FB = 30;

if (FB % 3 == 0) && (FB % 5 == 0){
    console.log("Fizz Buzz");
}
 else if ($FB % 3 == 0){
     console.log("Fizz")
 } else if (FB % 5) {
     console.log("Buzz");
 }

 //ternary
(FB % 5 == 0) && (FB % 3 == 0) ? console.log('Fizz Buzz'):
(FB % 3 == 0) ? console.log('Fizz'):
(FB % 5 == 0) ? console.log('Buzz'):
console.log('none of the above');

//switch
let FB = 30;
let a;
let b;
switch(FB % a == 0){
    case 'a = 5':
        console.log('Fizz');
        break;
    case 'b = 3':
        console.log('Buzz');
}

switch(FB % a == 0 && FB % b == 0){
   case 'a = 5', 'b = 3':
         console.log('Fizz Buzz');
}

let FB = 30;
for (var i = 1; i < 30; i++) {
    switch(true) {
       case i%3 === 0:
           console.log("Fizz");
           break; 
       case i%5 === 0:  
          console.log("Buzz");
          break;
       case i%15 === 0: //check for divisibility by both 3 & 5
           console.log("FizzBuzz");
           break;
     };
 };  

// ANSWERS

let FB = 30;
if (FB % 15 == 0) {
    console.log('FizzBuzz');
} else if (FB % 3 == 0) {
    console.log('Fizz');
} else if (FB % 5 == 0) {
    console.log('Buzz');
} else {
    console.log(FB);
}

let FB = 45;
switch (true) {
    case (FB % 15 === 0):
        console.log('Fizz Buzz');
    break;
    case (FB % 3 === 0):
        console.log('Fizz');
        break;
    case (FB % 5 === 0):
        console.log('Buzz');
        break;
}

let FB = 40;
(FB % 15 == 0) 
? console.log('FizzBuzz')
: (FB % 3 == 0) ? console.log('Fizz')
: (FB % 5 == 0) ? console.log('Buzz')
: console.log(FB);

for(let i = 0; i <= 100; i++) {
if (i % 15 == 0) {
    console.log('FizzBuzz');
} else if (i % 3 == 0) {
    console.log('Fizz');
} else if (i % 5 == 0) {
    console.log('Buzz');
} else {
    console.log(FB);
}
}