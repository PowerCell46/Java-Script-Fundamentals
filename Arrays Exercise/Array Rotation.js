function arrayRotation(array, numberOfRotations) {
let bool = false;
let newStartingArray = [];
let leftoutArray = [];
while(numberOfRotations> Number(array.length)) {

numberOfRotations -= Number(array.length);
}

for(let index = 0; index < Number(array.length); index++) {

if (index !== numberOfRotations) {
leftoutArray.push(array[index]);

} else if(index === numberOfRotations) {
newStartingArray.push(array[index]);

while(index < Number(array.length)) {
index++;
newStartingArray.push(array[index]);
}
}
if(bool === true) {
    break;
}
}

newStartingArray = newStartingArray.join(" ");
leftoutArray = leftoutArray.join(" ");
console.log(newStartingArray + leftoutArray)

}
