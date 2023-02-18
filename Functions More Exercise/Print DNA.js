function printDNA(lengthOfTheDNA) {
  let array = ["A", "T", "C", "G", "T", "T", "A", "G", "G", "G"];
  let index = -1;

  while (lengthOfTheDNA > 0) {
    let firstRow = `**${array[++index]}${array[++index]}**`;
    console.log(firstRow);
    lengthOfTheDNA--;
    if (lengthOfTheDNA === 0) {
      break;
    }

    if (index + 1 === Number(array.length)) {
      index = -1;
    }
    let secondRow = `*${array[++index]}--${array[++index]}*`;
    console.log(secondRow);
    lengthOfTheDNA--;
    if (lengthOfTheDNA === 0) {
      break;
    }

    if (index + 1 === Number(array.length)) {
      index = -1;
    }
    let thirdRow = `${array[++index]}----${array[++index]}`;
    console.log(thirdRow);
    lengthOfTheDNA--;
    if (lengthOfTheDNA === 0) {
      break;
    }

    if (index + 1 === Number(array.length)) {
      index = -1;
    }
    let forthRow = `*${array[++index]}--${array[++index]}*`;
    console.log(forthRow);
    lengthOfTheDNA--;
    if (lengthOfTheDNA === 0) {
      break;
    }

    if (index + 1 === Number(array.length)) {
      index = -1;
    }
  }
}
