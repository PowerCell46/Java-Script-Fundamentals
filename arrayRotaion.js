function arrayRotation(array, numberOfRotations) {
    let addedArray = [];
    let newArray = [];
    let flag = false;

    for (let index = 0; index < Number(array.length); index++) {

        if (index === numberOfRotations) {
            newArray.push(array[index]);

            for (let currentIndex = (index + 1); currentIndex < Number(array.length); currentIndex++) {
              
                newArray.push(array[currentIndex]);

                currentIndex++;
                if (currentIndex === Number(array.length)) {
                    flag = true;
                    break;
                } else {
                currentIndex--;
                }
            }
        }

        if (flag === true) {
        break;
        }

        addedArray.push(array[index]);
        
        index++;

        if (index === Number(array.length) && numberOfRotations > Number(array.length)) {
            numberOfRotations -= index;
            index = -1;
            addedArray = [];
        } else {
            index--;
        }
    }

newArray = newArray.join(" ");
addedArray = addedArray.join(" ");
console.log(newArray + " " + addedArray);
}
arrayRotation([2, 4, 15, 31], 5);