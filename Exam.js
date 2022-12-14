function exam(input) {
    let index = 0;

    let numberOfStudents = Number(input[index]);
    index++;

    let currentGrade = null;
    let sumOfGrades = null;

    let grade3Counter = null;
    let grade4Counter = null;
    let grade5Counter = null;
    let grade6Counter = null;


    for (let currentStudent = 1; currentStudent <= numberOfStudents; currentStudent++) {

        currentGrade = Number(input[index]);
        sumOfGrades += currentGrade;

        if (currentGrade >= 2 && currentGrade < 3) {
            grade3Counter++;
        } else if (currentGrade >= 3 && currentGrade < 4) {
            grade4Counter++;
        } else if (currentGrade >= 4 && currentGrade < 5) {
            grade5Counter++;
        } else if (currentGrade >= 5) {
            grade6Counter++;
        }
        index++
    }
    let onePercent = (numberOfStudents / 100);
    console.log(`Top students: ${(grade6Counter / onePercent).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(grade5Counter / onePercent).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(grade4Counter / onePercent).toFixed(2)}%`);
    console.log(`Fail: ${(grade3Counter / onePercent).toFixed(2)}%`);

    let averageScore = (sumOfGrades / numberOfStudents).toFixed(2)
    console.log(`Average: ${averageScore}`);
}
exam(["6",
    "2",
    "3",
    "4",
    "5",
    "6",
    "2.2"])
