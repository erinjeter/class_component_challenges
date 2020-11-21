/*
FUNCTIONS
*/

//General Idea: at their broadest level, functions do the following:
//1) they take some input which the function will handle or process
//2) they process the nput given to them
//3) they usually but not always return some value
//4) they can be invoked or used as many times as we want, cutting down on code repetition

//example 1
function newFunc(num){
    return num + 1;
}

console.log(newFunc(7));
console.log(newFunc(10));
console.log(newFunc(11));

//example two:
function sentence(firstName, lastName){
    return `My first name is ${firstName} and my last name is ${lastName}`
}

console.log(sentence('Erin','Jeter'));
console.log(sentence('Tyler',"Shelton"));

let superImportantSentence = sentence('Tina','Fey');
console.log(superImportantSentence);

//let's build a function that takes a xomples type - an array in this case - and logs each item in the input array

let arr = [1, true, {key: 'string'}, [0, false, null], 'heya!'];
let arr2 = [5,6,7,8,9,10];

function iteratorFunc (inputArr){
    for (let element of inputArr){
        console.log(element);
    }
}
iteratorFunc(arr);
iteratorFunc(arr2);