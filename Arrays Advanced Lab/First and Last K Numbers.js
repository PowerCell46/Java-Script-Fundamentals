function firstAndLastKnumbers(array) {
  let numberK = array[0];
  let arrayFirst = [];
  let arraySecond = [];
  let index2 = Number(array.length);
  for (let index = 1; index <= numberK; index++) {
    let currentNum = array[index];
    arrayFirst.push(currentNum);
  }

  for (let index1 = 1; index1 <= numberK; index1++) {
    index2--;
    let currentNum1 = array[index2];
    arraySecond.unshift(currentNum1); // the next number will push the one in front and it'll become first in the array 
  }

  console.log(arrayFirst.join(" "));
  console.log(arraySecond.join(" "));
}
