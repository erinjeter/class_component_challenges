function fullName(firstName, lastName, isReturned){
    let full = firstName + " " + lastName;
    console.log(`Hello, my name is ${full}`);
    if (isReturned){
    return full; //return allows you to use the result of the funtion
}
console.log("You didn't return full");
}

let myfullName = fullName('Erin', 'Jeter');

console.log(myFullName);