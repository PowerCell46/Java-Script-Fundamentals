function matrix(num) {

    let array = []; // we create a new empty array;
    for(let index = 0; index < num; index++) {
        array.push(num); // we create a For cycle which pushes the inputed number on every rotation to the empty array;
    }
    array = array.join(" "); // we convert the array to a string;

    for(let currentColumn = 1; currentColumn <= num; currentColumn++) {
    console.log(array); // on every column we print the array;
    }
}
matrix(10)