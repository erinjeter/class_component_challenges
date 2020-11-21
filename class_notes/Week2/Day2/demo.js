//Solve for fizzbuzz
//make it dynamic
//write the solve for 1..100

function solve(start, end){}
for(let i = start; i <= end; i++) {
    if (i % 15 == 0) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
    }

solve (1, 100);
solve (5, 50);
