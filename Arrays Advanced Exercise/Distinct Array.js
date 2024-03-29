function distinctArray(array) {

    let newArray = [];
    let firstNum = array[0];
    newArray.push(firstNum);

    for (let index = 1; index < Number(array.length); index++) {
        let currentNumber = Number(array[index]);
        let rememberIndex = index;
        rememberIndex--;
        let previousNumber = Number(array[rememberIndex]);

        while (currentNumber !== previousNumber && rememberIndex >= 1) {
            rememberIndex--;
            previousNumber = array[rememberIndex];
        }

        if (currentNumber !== previousNumber) {
            newArray.push(currentNumber);
        }
    }

    console.log(newArray.join(' '));
}
