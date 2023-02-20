function bombNumbers(numbersArray, array) {
    let bombNumber = array[0];
    let powerOfTheBomb = array[1];
    let keeper = 0;

    while (numbersArray.includes(bombNumber)) {
        let bombIndex = numbersArray.indexOf(bombNumber);
        let startDeleteIndex = bombIndex - powerOfTheBomb;
        let numberOfDeletedElements = (powerOfTheBomb * 2) + 1;
        if (startDeleteIndex < 0) {
            while (startDeleteIndex < 0) {
            keeper++;
            startDeleteIndex++;
            }
            numberOfDeletedElements -= keeper;
        }
        if (startDeleteIndex >= Number(numbersArray.length)) {
            startDeleteIndex = (Number(numbersArray.length) - 1) - powerOfTheBomb + 1;
            numberOfDeletedElements = powerOfTheBomb + 1

        }

        numbersArray.splice(startDeleteIndex, numberOfDeletedElements);
    }
    
    let sum = 0;

    for (let index = 0; index < Number(numbersArray.length); index++) {
        let currentNum = numbersArray[index];
        sum += currentNum;
    }
    console.log(sum);
}
