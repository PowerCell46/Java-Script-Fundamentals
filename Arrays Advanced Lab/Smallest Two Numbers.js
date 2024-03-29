function smallestTwoNums(array) {
  
    let smallestNumber = 10000000;

  for (let index = 0; index < Number(array.length); index++) {
    let currentNum = array[index];
    if (currentNum < smallestNumber) {
      smallestNumber = currentNum; // in the first For cycle we get the smallest number
    }
  }

  let indexOfTheBiggestNum = array.indexOf(smallestNumber); // we learn the index of the smallest number
  array.splice(indexOfTheBiggestNum, 1); // we remove the number from the array
  let secondSmallestNum = 1000000;
 
  for (let index1 = 0; index1 < Number(array.length); index1++) {
    let currentNum = array[index1];
    if (currentNum < secondSmallestNum) {
      secondSmallestNum = currentNum; // in the second For cycle we get the second smallest number
    }
  }
  
  let result = smallestNumber + " " + secondSmallestNum;
  console.log(result);
}
