function totalSale(quantity, price){
    let totalWithTax = quantity * price * 1.07;
    return totalWithTax;
}
console.log(totalSale(5,10));

function helloWorld(firstWord, secondWord){
    let fullGreeting = firstWord + ", " + secondWord + "!";
    return fullGreeting;
  }
  console.log(helloWorld("Hello", "World"));