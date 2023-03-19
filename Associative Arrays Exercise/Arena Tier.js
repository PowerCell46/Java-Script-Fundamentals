function arenaTier(array) {

    let gladiatorPoolObj = {}

    for (let index = 0; index < array.length - 1; index++) {
        let currentInput = array[index].split(" ");
        if (currentInput[1] === "->") {
            let gladiator = currentInput[0];
            let technique = currentInput[2];
            let skill = Number(currentInput[4]);

            if (!gladiatorPoolObj.hasOwnProperty(gladiator)) {
                gladiatorPoolObj[gladiator] = {}
                gladiatorPoolObj[gladiator][technique] = skill;

            } else {
                let previousTechniquesArray = Object.keys(gladiatorPoolObj[gladiator]);
                if (previousTechniquesArray.includes(technique)) {
                    let previousSkillValue = gladiatorPoolObj[gladiator][technique];
                    if (skill > previousSkillValue) {
                        gladiatorPoolObj[gladiator][technique] = skill;
                    }
                } else {
                    gladiatorPoolObj[gladiator][technique] = skill;
                }
            }

        } else if (currentInput[1] === "vs") {
            let firstGladiator = currentInput[0];
            let secondGladiator = currentInput[2];
            let arrayOfGladiators = Object.keys(gladiatorPoolObj);
            if (arrayOfGladiators.includes(firstGladiator) && arrayOfGladiators.includes(secondGladiator)) {
                let firstGladiatorTechniques = Object.keys(gladiatorPoolObj[firstGladiator]);
                let secondGladiatorTecnniques = Object.keys(gladiatorPoolObj[secondGladiator]);
                for (let currentTechnique1 of firstGladiatorTechniques) {
                    for (let currentTechnique2 of secondGladiatorTecnniques) {
                        if (currentTechnique1 === currentTechnique2) {
                            let firstGladiatorSkill = gladiatorPoolObj[firstGladiator][currentTechnique1];
                            let secondGladiatorSkill = gladiatorPoolObj[secondGladiator][currentTechnique2];
                            if (firstGladiatorSkill > secondGladiatorSkill) {
                                delete gladiatorPoolObj[secondGladiator];
                                break;
                            } else if (secondGladiatorSkill > firstGladiatorSkill) {
                                delete gladiatorPoolObj[firstGladiator];
                                break;
                            }
                        }
                    }
                }
            }

        }
    }

    let arrayOfGladiatorsNames = Object.keys(gladiatorPoolObj);
    let finalGladiatorToPointsObj = {}
    let totalSkillValuesOrdered = []

    for (let gladiator of arrayOfGladiatorsNames) {
        let currentGladiatorTotalSkill = 0;
        let skillArray = Object.values(gladiatorPoolObj[gladiator]);
        for (let skill of skillArray) {
            currentGladiatorTotalSkill += skill;
        }
        finalGladiatorToPointsObj[gladiator] = currentGladiatorTotalSkill;
        totalSkillValuesOrdered.push(currentGladiatorTotalSkill);
    }
    totalSkillValuesOrdered.sort((a, b) => b - a);

    let currentGladiatorTotalSkillValue = totalSkillValuesOrdered[0];


    while (totalSkillValuesOrdered.length > 0) {
        let finalPrintStringOutput = "";

        let currentSkillValueEncountersArray = [];
        for (let index = 0; index < Object.values(finalGladiatorToPointsObj).length; index++) { //проверяваме дали total skill-a не се повтаря
            let currentSkill = Object.values(finalGladiatorToPointsObj)[index];
            if (currentGladiatorTotalSkillValue === currentSkill) {
                currentSkillValueEncountersArray.push(index);
            }
        }
        if (currentSkillValueEncountersArray.length === 1) { // ако се total skill-а се среша само 1 път
            let currentGladiator = Object.keys(finalGladiatorToPointsObj)[currentSkillValueEncountersArray];
            totalSkillValuesOrdered.shift();
            finalPrintStringOutput += "" + currentGladiator + ": " + currentGladiatorTotalSkillValue + " skill"

            let currentGladiatorObj = gladiatorPoolObj[currentGladiator];
            let currentGladiatorSkillsOrdered = Object.values(currentGladiatorObj);
            currentGladiatorSkillsOrdered.sort((a, b) => b - a);
            let currentSkillValue = currentGladiatorSkillsOrdered[0];

            while (true) { // while цикъл, с който разпечатваме всеки technique, спрямо силата му
                if (currentGladiatorSkillsOrdered.length === 0) {
                    console.log(finalPrintStringOutput);
                    delete finalGladiatorToPointsObj[currentGladiator];
                    currentGladiatorTotalSkillValue = totalSkillValuesOrdered[0];
                    break;
                }
                let currentSkillValueEncountersArrayFinal = [];
                for (let index = 0; index < Object.values(currentGladiatorObj).length; index++) {
                    let currentSkill = Object.values(gladiatorPoolObj[currentGladiator])[index];
                    if (currentSkillValue === currentSkill) {
                        currentSkillValueEncountersArrayFinal.push(index);
                    }
                }
                if (currentSkillValueEncountersArrayFinal.length === 1) { // ако current skill-a се среща само 1 път
                    let currentTechnique = Object.keys(gladiatorPoolObj[currentGladiator])[currentSkillValueEncountersArrayFinal[0]];
                    finalPrintStringOutput += "\n- " + currentTechnique + " <!> " + currentSkillValue;
                    currentGladiatorSkillsOrdered.shift();
                    delete currentGladiatorObj[currentTechnique];
                    currentSkillValue = currentGladiatorSkillsOrdered[0];

                } else if (currentSkillValueEncountersArrayFinal.length !== 1) { // ако current skill-a се среща повече от 1 път
                    let arrayOfDuplicateTechniques = []; // подреждаме в масив имената на технийковете
                    for (let index of currentSkillValueEncountersArrayFinal) {
                        arrayOfDuplicateTechniques.push(Object.keys(gladiatorPoolObj[currentGladiator])[index]);
                    }
                    for (let index = 0; index < arrayOfDuplicateTechniques.length; index++) {
                        currentGladiatorSkillsOrdered.shift();
                        delete currentGladiatorObj[arrayOfDuplicateTechniques[index]];
                    }
                    arrayOfDuplicateTechniques.sort((a, b) => a.localeCompare(b));
                    for (let currentTechnique of arrayOfDuplicateTechniques) {
                        finalPrintStringOutput += "\n- " + currentTechnique + " <!> " + currentSkillValue;
                    }
                    currentSkillValue = currentGladiatorSkillsOrdered[0];
                }
            }

        } else if (currentSkillValueEncountersArray.length !== 1) { // ако total skill-а се среща повече от 1 път
            let arrayOfDuplicateSkillsGladiators = [];
            for (let index of currentSkillValueEncountersArray) {
                arrayOfDuplicateSkillsGladiators.push(Object.keys(finalGladiatorToPointsObj)[index])
            }
            arrayOfDuplicateSkillsGladiators.sort((a, b) => a.localeCompare(b));

            while (arrayOfDuplicateSkillsGladiators.length > 0) {
                finalPrintStringOutput = "";
                finalPrintStringOutput += "" + arrayOfDuplicateSkillsGladiators[0] + ": " + currentGladiatorTotalSkillValue + " skill";
                let currentGladiatorObj = gladiatorPoolObj[arrayOfDuplicateSkillsGladiators[0]];
                let currentGladiatorSkillsOrdered = Object.values(currentGladiatorObj);
                currentGladiatorSkillsOrdered.sort((a, b) => b - a);
                let currentSkillValue = currentGladiatorSkillsOrdered[0];

                while (true) { // while цикъл, с който разпечатваме всеки technique, спрямо силата му
                    if (currentGladiatorSkillsOrdered.length === 0) {
                        console.log(finalPrintStringOutput);
                        delete finalGladiatorToPointsObj[arrayOfDuplicateSkillsGladiators[0]];
                        arrayOfDuplicateSkillsGladiators.shift();
                        currentGladiatorTotalSkillValue = totalSkillValuesOrdered[0];
                        totalSkillValuesOrdered.shift();
                        break;
                    }
                    let currentSkillValueEncountersArrayFinal = [];
                    for (let index = 0; index < Object.values(currentGladiatorObj).length; index++) {
                        let currentSkill = Object.values(gladiatorPoolObj[arrayOfDuplicateSkillsGladiators[0]])[index];
                        if (currentSkillValue === currentSkill) {
                            currentSkillValueEncountersArrayFinal.push(index);
                        }
                    }
                    if (currentSkillValueEncountersArrayFinal.length === 1) { // ако current skill-a се среща само 1 път
                        let currentTechnique = Object.keys(gladiatorPoolObj[arrayOfDuplicateSkillsGladiators[0]])[currentSkillValueEncountersArrayFinal[0]];
                        finalPrintStringOutput += "\n- " + currentTechnique + " <!> " + currentSkillValue;
                        currentGladiatorSkillsOrdered.shift();
                        delete currentGladiatorObj[currentTechnique];
                        currentSkillValue = currentGladiatorSkillsOrdered[0];

                    } else if (currentSkillValueEncountersArrayFinal.length !== 1) { // ако current skill-a се среща повече от 1 път
                        let arrayOfDuplicateTechniques = []; // подреждаме в масив имената на технийковете
                        for (let index of currentSkillValueEncountersArrayFinal) {
                            arrayOfDuplicateTechniques.push(Object.keys(gladiatorPoolObj[arrayOfDuplicateSkillsGladiators[0]])[index]);
                        }
                        for (let index = 0; index < arrayOfDuplicateTechniques.length; index++) {
                            delete currentGladiatorObj[arrayOfDuplicateTechniques[index]];
                            currentGladiatorSkillsOrdered.shift();
                        }
                        arrayOfDuplicateTechniques.sort((a, b) => a.localeCompare(b));
                        for (let currentTechnique of arrayOfDuplicateTechniques) {
                            finalPrintStringOutput += "\n- " + currentTechnique + " <!> " + currentSkillValue;
                        }

                    }
                }

            }

        }
    }
}
