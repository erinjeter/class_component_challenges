//CHALLENGE 1
//Create a function that, when invoked,
//lists out the numbers 1-10

let array = [1,2,3,4,5,6,7,8,9,10];

function challenge(){
    for (num in array){
    console.log(array[num]);
    }
}

challenge();



function challenge(){
    console.log(1,2,3,4,5,6,7,8,9,10);
}
challenge();

function counting(){
    for(let i = 1; i <=10; i++) {
        console.log(i);
    }
}

counting();

//CHALLENGE 1
//Given the array, create a function that lists out the values individually

let arr = ['Emily', 'Mark', 'Erin', 'Chelsea'];

function secondChallenge(){
    for (num in arr){
        console.log(arr[num]);
    }
}

secondChallenge();


function arrList(){
    for (name of arr) {
        console.log(name);
    }
}
arrList();