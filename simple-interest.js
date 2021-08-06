function getInterest(pricipal,rate,time){
    interest = pricipal*rate*time / 100;
    return interest;
}
var pricipal = 1000000;
var total = pricipal + getInterest(1000000,5,10);
console.log(total);
