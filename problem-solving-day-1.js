/* Coding #1:
// Print numbers from 1 to 10*/

var number = 0;
while(number < 10){
    number++;
    var  result = number;
    console.log(result)
}


/* Coding #2:
// Print the odd numbers less than 100*/


var showingOdd = 1;
while(showingOdd < 100){
    console.log(showingOdd);
    showingOdd +=2 ;
}
var showingOdd = 1;
while (showingOdd < 100){
    console.log(showingOdd)
    showingOdd +=2;
}


/*Coding #2:
Print the even numbers less than 100*/
 var showingEven = 2;
 while(showingEven < 100){
     console.log(showingEven)
     showingEven +=2;
 }

// for loop odd numbers*/
for (let i =1; i <100; i +=2){
    console.log(i)
}

/* for loop even numbers*/

for(let i = 100; i <= 100 && i > 1; i -=2){
    console.log(i)
}

/*Coding #5:
Calculate the sum of numbers from 1 to 10 */

const number = 100;
var sum = 0;
for(let i = 0; i <number; i++){
    sum += i;
}

console.log('This is sum = ', sum)

// Coding #7:
// Calculate the sum of 
// odd numbers greater than 10 and less than 30
const number = 30;
let sum = 0;
for (var i =11; i <30; i +=2){
    sum += i;
}
console.log(sum);

/*year to day*/
function getDays(year){
    let days = year * 365;
    return days;
}
console.log(getDays(1))

function getYear(day){
    let year = day / 365;
    return year;

}
console.log(getYear(730), 'year/years')

// hr to minute 

function getMinute(hour){
    let minute = hour * 60;
    return minute;
}

console.log('minute = ', getMinute(3))



/* TASK-1: 
find the least second number from an array.
Ex: [2,9,6,1] return 2 
function getNumber(array1){
var array1 = [2,4,8,3,1];
var min = math.min.apply(null, array1);
array1.splice(array1.indexOf(min),1);
return math.min.apply(null,arr);
}

console.log(getNumber(array1))*/

