function arrayManipulator(array, commands) {

    let newArray = array.slice();
    let sum = null;

    for (let index = 0; index < Number(commands.length); index++) {
        let sumArray = [];
        let currentCommand = commands[index];
        currentCommand = currentCommand.split(" ");

        if (currentCommand[0] === "add") {
            newArray.splice(Number(currentCommand[1]), 0, Number(currentCommand[2]));
            continue;
        }

        if (currentCommand[0] === "addMany") {
            let index2 = Number(currentCommand.length) - 1;
            while (index2 > 1) {
                newArray.splice(Number(currentCommand[1]), 0, Number(currentCommand[index2]));
                index2--;
            }
            continue;
        }

        if (currentCommand[0] === "contains") {
            let searchedNum = Number(currentCommand[1]);
            console.log(newArray.indexOf(searchedNum));
            continue;
        }

        if (currentCommand[0] === "remove") {
            newArray.splice(Number(currentCommand[1]), 1);
            continue;
        }

        if (currentCommand[0] === "shift") {
            let numberOfShifts = Number(currentCommand[1]);
            while (numberOfShifts > 0) {
                let currentShift = newArray.shift();
                newArray.push(currentShift);
                numberOfShifts--;
            }

        }

        if (currentCommand[0] === "sumPairs") {
            let index3 = 0;
            if (Number(newArray.length) % 2 === 0) {
                while (index3 < Number(newArray.length)) {
                    let currentNum = Number(newArray[index3]);
                    index3++;
                    let nextNum = Number(newArray[index3]);
                    sum = currentNum + nextNum;
                    sumArray.push(sum);
                    index3++;
                }
                newArray = sumArray;
                continue;
            } else {
                while (index3 < Number(newArray.length - 1)) {
                    let currentNum = Number(newArray[index3]);
                    index3++;
                    let nextNum = Number(newArray[index3]);
                    sum = currentNum + nextNum;
                    sumArray.push(sum);
                    index3++;
                }
                sum = newArray[index3]
                sumArray.push(sum);
                newArray = sumArray;
                continue;
            }
        }
        if (currentCommand[0] === "print") {
            console.log(`[ ${newArray.join(", ")} ]`);
            break;
        }
    }

}
