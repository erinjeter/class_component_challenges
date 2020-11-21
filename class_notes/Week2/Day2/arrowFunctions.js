//Arrow Functions
//you'll only use concise if your function is one line
let conArrow = () => console.log("this is concise");
conArrow();

//generally should use this way
let blockArrow = () => {
    console.log("This is a block arrow function");
}
blockArrow();

//arrow functions are not hoisted

let name = () => "Erin"

let name2 = () => {
    return "Erin"
}

name2();

