function manOfWar(array) {
    let pirateShipArray = (array[0]).split(">");
    let warshipArray = (array[1]).split(">");
    warshipArray = warshipArray.map(x => Number(x));
    pirateShipArray = pirateShipArray.map(x => Number(x));

    let maximumHealthCapacity = Number(array[2]);
    let index = 3;
    let currentInput = array[index];
    let theProgramMustBeStopped = false;

    while (currentInput !== "Retire" && theProgramMustBeStopped === false) {
        currentInput = currentInput.split(" ");
        let currentCommand = currentInput.shift();

        switch (currentCommand) {

            case "Fire":
                let fireIndex = Number(currentInput[0]);
                let fireDamage = Number(currentInput[1]);
                if (fireIndex >= 0 && fireIndex < Number(warshipArray.length)) {
                    let fireHealth = warshipArray[fireIndex] - fireDamage;
                    if (fireHealth <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        theProgramMustBeStopped = true;
                        break;
                    }
                    else {
                        warshipArray.splice(fireIndex, 1, fireHealth);
                    }
                } break;

            case "Defend":
                let startIndex = Number(currentInput[0]);
                let endIndex = Number(currentInput[1]);
                let defendDamage = Number(currentInput[2]);
                if (startIndex >= 0 && startIndex < Number(pirateShipArray.length) && endIndex >= 0 && endIndex < Number(pirateShipArray.length)) {
                    while (startIndex <= endIndex) {
                        let currentDefend = pirateShipArray[startIndex] - defendDamage;
                        if (currentDefend <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            theProgramMustBeStopped = true;
                            break;
                        } else {
                            pirateShipArray.splice(startIndex, 1, currentDefend);
                        }
                        startIndex++;
                    }
                } break;

            case "Repair":
                let repairIndex = Number(currentInput[0]);
                let repairHealth = Number(currentInput[1]);
                if (repairIndex >= 0 && repairIndex < Number(pirateShipArray.length)) {
                    let newHealth = pirateShipArray[repairIndex] + repairHealth;
                    if (newHealth > maximumHealthCapacity) {
                        newHealth = maximumHealthCapacity;
                    }
                    pirateShipArray.splice(repairIndex, 1, newHealth);
                } break;

            case "Status":
                let minimumHealthCapacity = (maximumHealthCapacity / 100) * 20;
                let statusArray = pirateShipArray.filter(x => x < minimumHealthCapacity);
                console.log(`${statusArray.length} sections need repair.`);
                break;
        }

        index++;
        currentInput = array[index];
    }


    if (theProgramMustBeStopped === false) {
        let pirateStatus = 0;
        for (let index = 0; index < Number(pirateShipArray.length); index++) {
            let currentStatus = pirateShipArray[index];
            pirateStatus += currentStatus;
        }

        let warshipStatus = 0;
        for (let index = 0; index < Number(warshipArray.length); index++) {
            let currentStatus = warshipArray[index];
            warshipStatus += currentStatus;
        }

        console.log(`Pirate ship status: ${pirateStatus}`);
        console.log(`Warship status: ${warshipStatus}`);
    }
}
