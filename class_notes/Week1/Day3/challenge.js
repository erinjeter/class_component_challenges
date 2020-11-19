let myName = "Erin";
let friendName = "Alison";
console.log(myName.length);
console.log(friendName.length);

howManyLetter();
function howManyLetters() {
if (myName.length > friendName.length);
console.log.("myName is longer than my friend's");
(friendName.length < myName.length);
console.log("Alison's name is longer than mine");
}

myFunction();
function myFunction() {
    var str = "Erin";
    var e = str.length;
    var str = "Alison";
    var a = str.length;
    console.log("Erin's name is shorter than Alison's by",(a-e) "letters.");
}

//correct code below

let myName = 'Danielle';
let friend = 'Justin';

console.log(myName.length);
console.log(friend.length);

if (myName.length > friend.length) {
    let letters = myName.length - friend.length
    console.log(`${friend}'s name is shorter than ${myName}'s name by ${letters} letters`)
} else if (myName.length < friend.length) {
    let letters = friend.length - myName.length
    console.log(`${friend}'s name is longer than ${myName}'s name by ${letters} letters`)
} else {
    console.log('Our names are the same length!')
}