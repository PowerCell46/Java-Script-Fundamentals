function rotateArray(array) {
  let amountOfRotation = array[Number(array.length - 1)];
  console.log(amountOfRotation);
  let rotation = 0;

  while (amountOfRotation > Number(array.length)) {
    amountOfRotation = amountOfRotation - Number(array.length);
  }
  console.log(amountOfRotation);
}
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
