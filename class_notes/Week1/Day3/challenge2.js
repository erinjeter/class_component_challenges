let hamburger = {
    calories: 750,
    withCheese: true,
    name: "Hamberder",
    toppings: {topping1:"onion", topping2:"pickle", topping3:"ketchup", topping4:"mustard", topping5:"lettuce"}
}
console.log(typeof 750);

console.log(typeof hamburger.calories)
if (typeof hamburger.calories !== typeof 750) {
    console.log("What are you?!")
}

//instructor answer

let object = {
    name: 'Link',
    hearts: '10',
    isZelda: false,
    weapon: {sword: 'Master Sword'}
}

console.log(typeof object.name);
let value = object.hearts;

if (typeof value === 'string'){
    console.log('This value is a string')
} else if (typeof value === 'number') {
    console.log('This value is a number')
} else if (typeof value === 'boolean'){
    console.log('This value is a boolean')
} else if (typeof value === 'object') {
    console.log('This value is an object')
} else {
    console.log('What are you?!')
}