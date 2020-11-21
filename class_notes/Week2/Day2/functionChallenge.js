/*CHALLENGE

Make a tip calculator using a function
Have it RETURN the value
Capture that returned value in a VARIABLE
Print that variable
*/


let calcTip = (bill, tipPerc) => [
    let totalMult = 1 + tipPerc;
    return bill * totalMult;
]
let totalBill = calc(100, 0.2);
console.log(totalBill);


