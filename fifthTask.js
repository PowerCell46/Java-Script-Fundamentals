function seaSales(input) {
let seaExcursionsCount = null;
let mountainExcursionsCount = null;
let index = 0;
let seaCount = Number(input[index]);
index++;
mountainCount = Number(input[index]);
index++;
let currentExcursion = input[index];

while(currentExcursion !== "Stop") {

switch(currentExcursion) {
case "sea":
if(seaCount > 0) {
seaCount--;
seaExcursionsCount++;
} break;

case "mountain":
if(mountainCount > 0) {
mountainCount--;
mountainExcursionsCount++;
} break;
}

index++;
currentExcursion = input[index];
if(mountainCount === 0 && seaCount === 0) {
    break;
}
}


if(mountainCount === 0 && seaCount === 0) {
console.log("Good job! Everything is sold.")
}
let finalSum = mountainExcursionsCount * 499 + seaExcursionsCount * 680;
console.log(`Profit: ${finalSum} leva.`);
}
seaSales(["2",
"2",
"sea",
"mountain",
"sea",
"sea",
"mountain"])


