function charactersInRange(firstChar, secondChar) {

let indexOfTheFirstChar = null;
let indexOfTheSecondChar = null;

for(let currentIndex = 0; currentIndex <= 126; currentIndex++) {

    if(firstChar === String.fromCharCode(currentIndex)) {
    indexOfTheFirstChar = currentIndex;
    } 
    if(secondChar === String.fromCharCode(currentIndex)) {
    indexOfTheSecondChar = currentIndex;
    }
}

let firstOutcomePrint = "";
let secondOutcomePrint = "";
if (indexOfTheFirstChar < indexOfTheSecondChar) {
for(let start = indexOfTheFirstChar + 1; start < indexOfTheSecondChar; start++) {
firstOutcomePrint += (String.fromCharCode(start)) + " ";
}
console.log(firstOutcomePrint);
} else if (indexOfTheFirstChar > indexOfTheSecondChar) {
for(let start = indexOfTheSecondChar + 1; start < indexOfTheFirstChar; start++) {
secondOutcomePrint += (String.fromCharCode(start)) + " ";
}
console.log(secondOutcomePrint);
}
}
