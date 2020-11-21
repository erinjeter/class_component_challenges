//Scope

let x = 12;

function scope(){
    let x = 33;
    console.log(x);
}

scope();
console.log(x);

let y = 12;
function scope(){
    y = 33;
    console.log(y);
}

scope();
console.log(y);

var x = 12;

function varTest(){
    var x = 33;
    if (true) {
        var x = 45;
        console.log(x); //45
    }
    console.log(x); //45
}

varTest();
console.log(x); //12

//next example

let x =12;

function letTest(){
    var x = 33;
    if(true) {
        let x = 45;
        console.log(x); //45
    }
    console.log(x); //33
}

letTest();
console.log(x); //12

