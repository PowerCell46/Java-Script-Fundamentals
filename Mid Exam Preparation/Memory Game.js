function memoryGame(array) {
    let sequenceOfElArray = (array[0]).split(" ");
    let index = 1;
    let currentIndexes = array[index];
    let numberOfMoves = 0;

    while (currentIndexes !== "end") {
        currentIndexes = currentIndexes.split(" ");
        let index1 = Number(currentIndexes[0]);
        let index2 = Number(currentIndexes[1]);

        numberOfMoves++;

        if (index1 === index2 || index1 < 0 || index2 < 0 || index1 >= Number(sequenceOfElArray.length) || index2 >= Number(sequenceOfElArray.length)) {
            sequenceOfElArray.splice((Number(sequenceOfElArray.length) / 2), 0, `${-numberOfMoves}a`, `${-numberOfMoves}a`); // трябва да се закръгли средата на масива
            console.log("Invalid input! Adding additional elements to the board");
            index++;
            currentIndexes = array[index];
            continue;
        }

        if (sequenceOfElArray[index1] === sequenceOfElArray[index2] && index1 !== index2) {
            console.log(`Congrats! You have found matching elements - ${sequenceOfElArray[index1]}!`);
            sequenceOfElArray = sequenceOfElArray.filter(x => x !== sequenceOfElArray[index1]);
        } else if (sequenceOfElArray[index1] !== sequenceOfElArray[index2]) {
            console.log("Try again!");
        }

        if (Number(sequenceOfElArray.length) <= 0) {
            console.log(`You have won in ${numberOfMoves} turns!`);
            break;
        }

        index++;
        currentIndexes = array[index];
    }

    if (Number(sequenceOfElArray.length) > 0) {
        console.log(`Sorry you lose :(`)
        console.log(sequenceOfElArray.join(" "));
    }
}
