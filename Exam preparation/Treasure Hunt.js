function treasureHunt(array) {
    let initialLootArray = (array[0]).split("|");
    let index = 1;
    let currentCommand = array[index];
    let stealArray = [];

    while (currentCommand !== "Yohoho!") {
        let currentInput = currentCommand.split(" ");

        switch (currentInput[0]) {
            case "Loot":
                let lootIndex = 1;
                while (lootIndex < Number(currentInput.length)) {
                    let currentItem = currentInput[lootIndex];
                    if (!initialLootArray.includes(currentItem)) {
                        initialLootArray.unshift(currentItem);
                    }
                    lootIndex++;
                } break;

            case "Drop":
                let dropIndex = Number(currentInput[1]);
                if (dropIndex >= 0 && dropIndex < Number(initialLootArray.length)) {
                    let removedItem = initialLootArray.splice(dropIndex, 1);
                    initialLootArray.push(removedItem[0]);
                } break;

            case "Steal":
                let stealIndex = Number(currentInput[1]);
                let items = initialLootArray.splice(-stealIndex);
                console.log(items.join(", "));
                break;
        }

        index++;
        currentCommand = array[index];
    }

    let averageTreasureGain = 0;
    for (let finalIndex = 0; finalIndex < Number(initialLootArray.length); finalIndex++) {
        let currentItemLength = Number((initialLootArray[finalIndex]).length);
        averageTreasureGain += currentItemLength;
    }

    if (averageTreasureGain > 0) {
        averageTreasureGain = averageTreasureGain / Number(initialLootArray.length);
        console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`);
    } else if (averageTreasureGain === 0) {
        console.log(`Failed treasure hunt.`);
    }
}
