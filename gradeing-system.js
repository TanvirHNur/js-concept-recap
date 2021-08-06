
function getGrade(result){
var x = result;
if (x >= 79 && x <= 100){
    result = '(congrats, you got A+)';
}
else if (101 < x){
    result = ('Sorry. It is only for 100 or below 100');
}
 else if (x >= 69 && x <= 100){
    result = '(congrats, you got A)';
}
else if (x >= 59 && x <= 100){
    result = '(congrats, you got A-)';
}
else if (x >= 49 && x <= 100){
    result = '(congrats, you got B)';
}
else if (x >= 39 && x <= 100){
    result = '(congrats, you got C)';
}
else if (x >= 33 && x <= 100){
    result = '(congrats, you got D)';
}
else{
    result = '(Buddy,Try again. Best of Luck)';
}
return result;
}
console.log('Math=', getGrade(80))
console.log('Social Science=', getGrade(119))
console.log('Higher Math=', getGrade(29))



// var result = 100;
// var x = result;

// if (x >= 79 && x <= 100){
//     console.log('congrats, you got A+')
// }
// else if (101 < x){
//     console.log('Sorry. It is only for 100 or below 100')
// }
//  else if (x >= 69 && x <= 100){
//     console.log('congrats, you got A')
// }
 
// else if (x >= 59 && x <= 100){
//     console.log('congrats, you got A-')
// }
// else if (x >= 49 && x <= 100){
//     console.log('congrats, you got B')
// }
// else if (x >= 39 && x <= 100){
//     console.log('congrats, you got C')
// }
// else if (x >= 33 && x <= 100){
//     console.log('congrats, you got D')
// }
// else{
//     console.log('Try again, Best of Luck')
// }

// console.log(getGrade(70))

// var reult = 30;
// var reult = 50;
// var reult = 60;