function arrayModifier(array) {
    let arrayOfNumbers = (array[0]).split(" ");
    arrayOfNumbers = arrayOfNumbers.map(Number);

    for (let index = 1; index < Number(array.length); index++) {
        let currentInput = array[index];
        currentInput = currentInput.split(" ");
        let currentCommand = currentInput.shift();

        switch (currentCommand) {
            case "swap":
                let index1 = Number(currentInput[0]);
                let index2 = Number(currentInput[1]);
                let firstNum = arrayOfNumbers[index1];
                let secondNum = arrayOfNumbers[index2];
                arrayOfNumbers.splice(index1, 1, secondNum);
                arrayOfNumbers.splice(index2, 1, firstNum);
                break;
            case "multiply":
                let index3 = Number(currentInput[0]);
                let index4 = Number(currentInput[1]);
                let thirdNum = arrayOfNumbers[index3];
                let fourthNum = arrayOfNumbers[index4];
                let result = thirdNum * fourthNum;
                arrayOfNumbers.splice(index3, 1, result);
                break;
            case "decrease":
                arrayOfNumbers = arrayOfNumbers.map(x => x - 1);
                break;
        }
    }
    console.log(arrayOfNumbers.join(", "));
}
