function duneTask(startingYield) {
sumOfYeild = 0;
let daysCounter = 0;


for(currentYield = startingYield; currentYield >= 100; currentYield - 10) {
daysCounter++;
sumOfYeild += currentYield;

if(sumOfYeild >= 26) {
sumOfYeild -= 26; // consumed by the miners
}
currentYield -= 10;
}

if(sumOfYeild >= 26) {
sumOfYeild -= 26; // consumed by the miners after finishing the current mining spot
}
console.log(daysCounter);
console.log(sumOfYeild);
}
