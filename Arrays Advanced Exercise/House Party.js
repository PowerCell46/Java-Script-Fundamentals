function houseParty(array) {

    let printedList = [];

    for (let index = 0; index < Number(array.length); index++) {
        let currentLine = array[index];
        currentLine = currentLine.split(" ");

        if (!printedList.includes(currentLine[0]) && currentLine[1] === "is" && currentLine[2] === "going!") {
            printedList.push(currentLine[0]);
            continue;
        }
        if (printedList.includes(currentLine[0]) && currentLine[1] === "is" && currentLine[2] === "going!") {
            console.log(`${currentLine[0]} is already in the list!`);
            continue;
        }
        if (!printedList.includes(currentLine[0]) && currentLine[1] === "is" && currentLine[2] === "not" && currentLine[3] === "going!") {
            console.log(`${currentLine[0]} is not in the list!`);
            continue;
        }
        if (printedList.includes(currentLine[0]) && currentLine[1] === "is" && currentLine[2] === "not" && currentLine[3] === "going!") {
            let index = printedList.indexOf(currentLine[0]);
            printedList.splice(index, 1);
            continue;
        }

    }

    console.log(printedList.join(`\n`));
}
