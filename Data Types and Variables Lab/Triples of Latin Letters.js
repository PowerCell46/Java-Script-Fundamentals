function triplesOfLatinLetters(inputedNumber) {

    for (let index1 = 97; index1 < (97 + Number(inputedNumber)); index1++) {

        let firstPrintedLetter = (String.fromCharCode(index1));

        for (let index2 = 97; index2 < (97 + Number(inputedNumber)); index2++) {
            let secondPrintedLetter = (String.fromCharCode(index2));

            for (let index3 = 97; index3 < (97 + Number(inputedNumber)); index3++) {
                let thirdPrintedLetter = (String.fromCharCode(index3));
                console.log(`${firstPrintedLetter}${secondPrintedLetter}${thirdPrintedLetter}`);
            }
        }
    }

}
