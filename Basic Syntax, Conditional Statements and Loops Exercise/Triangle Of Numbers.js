function triangleOfNumbers(number) {

let counter = 0;
let print = "";

for(let rows = 1; rows <= number; rows++) {

if(rows === 1) {
    console.log(1);
    continue;
}
for(let column = rows; counter < rows; counter++) {
    print += column + " ";
}
counter = 0;
console.log(print);
print = "";
}
}
