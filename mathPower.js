function mathPower(number, power){

let poweredNum = null;
let n = 0;   
 
while(power - 1> 0) {
if(n === 0) {
poweredNum = number *number;
} else {
poweredNum = poweredNum * number;
}
n++;
power--;
}
console.log(poweredNum);
}
mathPower(3,4);