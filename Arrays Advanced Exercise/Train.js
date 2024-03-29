function train(array) {

    let peopleInTheWagons = array[0]; // number of passengers that are currently in a wagon. 
    peopleInTheWagons = peopleInTheWagons.split(" ");
    let maxCapacityOfAWagon = Number(array[1]); // the max capacity of each wagon 
    peopleInTheWagons = peopleInTheWagons.map(x => Number(x));
    let leftSeatsArray = [];

    for (let index = 0; index < Number(peopleInTheWagons.length); index++) {
        let currentNum = peopleInTheWagons[index];
        leftSeatsArray.push(maxCapacityOfAWagon - currentNum);
    }

    for (let index = 2; index < Number(array.length); index++) {
        let currentInput = array[index];
        currentInput = currentInput.split(" ");
        if (currentInput[0] === "Add") {
            peopleInTheWagons.push(Number(currentInput[1]));
            leftSeatsArray.push(maxCapacityOfAWagon - Number(currentInput[1]));
        } else {
            currentInput = Number(currentInput[0]);
            let index1 = 0;
            while (currentInput > leftSeatsArray[index1]) {
                index1++;
            }
            let newNumber = (peopleInTheWagons[index1] + currentInput);
            let newNumberDivide = leftSeatsArray[index1] - currentInput;
            leftSeatsArray.splice(index1, 1, newNumberDivide);
            peopleInTheWagons.splice(index1, 1, newNumber);
        }
    }
    console.log(peopleInTheWagons.join(" "));
}
