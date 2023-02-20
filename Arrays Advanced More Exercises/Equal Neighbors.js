function equalNeighbours(arrayOfArrays) {

    let counter = 0;

    for (let index = 0; index < arrayOfArrays.length; index++) {
        let currentArray = arrayOfArrays[index];
        let previousArray = arrayOfArrays[index - 1];
        let nextArray = arrayOfArrays[index + 1];

        for (let i = 0; i < currentArray.length; i++) {
            let current_number = (currentArray[i]);

            if (index > 0) {
                if(current_number === (previousArray[i])) {
                    counter++;
                }
            }
            if (index <= arrayOfArrays.length - 2) {
                if(current_number === (nextArray[i])) {
                    counter++;
                }
            }
            if (i > 0) {
                if (current_number === (currentArray[i - 1])) {
                    counter++;
                }
            }
            if (i <= currentArray.length - 2) {
                if (current_number === (currentArray[i + 1])) {
                    counter++;
                }
            }
        }
    }

console.log(counter / 2);

}
