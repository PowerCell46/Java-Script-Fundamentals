function chessBoard(number) {
  console.log(`<div class="chessboard">`);

  let oddOutput = `   <div>`;
  for (let index = 1; index <= number; index++) {
    if (index % 2 === 0) {
      oddOutput += `\n  <span class="white"></span>`;
    } else {
      oddOutput += `\n  <span class="black"></span>`;
    }
    index++;
    if (index === number + 1) {
      oddOutput += `\n   </div>`;
      index--;
    } else {
      index--;
    }
  }

  let evenOutput = `  <div>`;
  for (let index = 2; index <= number + 1; index++) {
    if (index % 2 === 0) {
      evenOutput += `\n <span class="white"></span>`;
    } else {
      evenOutput += `\n <span class="black"></span>`;
    }
    index++;
    if (index === number + 2) {
      evenOutput += `\n   </div>`;
      index--;
    } else {
      index--;
    }
  }

  for (
    let currentLinePrint = 1;
    currentLinePrint <= number;
    currentLinePrint++
  ) {
    if (currentLinePrint % 2 !== 0) {
      console.log(oddOutput);
    } else {
      console.log(evenOutput);
    }

    currentLinePrint++;
    if (currentLinePrint === number + 1) {
      console.log(` </div>`);
      currentLinePrint--;
    } else {
      currentLinePrint--;
    }
  }
}
