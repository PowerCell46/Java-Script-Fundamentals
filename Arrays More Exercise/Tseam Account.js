function tseamAccount(array) {
    let index = 0;
    let accountArray = (array[index]).split(" ");
    index++;
    let currentInput = array[index];
    let command = "";
    let game = "";

    while (currentInput !== "Play!") {
        currentInput = currentInput.split(" ");
        command = currentInput.shift();
        game = currentInput.shift();

        switch (command) {
            case "Install":
                if (!accountArray.includes(game)) {
                    accountArray.push(game);
                } break;
            case "Uninstall":
                if (accountArray.includes(game)) {
                    let indexOfDeletion = accountArray.indexOf(game);
                    accountArray.splice(indexOfDeletion, 1);
                } break;
            case "Update":
                if (accountArray.includes(game)) {
                    let updateIndex = accountArray.indexOf(game);
                    accountArray.splice(updateIndex, 1);
                    accountArray.push(game);
                } break;
            case "Expansion":
                let expansionArray = game.split("-");
                if (accountArray.includes(expansionArray[0])) {
                    let indexOfExpansion = accountArray.indexOf(expansionArray[0]);
                    let expansionPrint = expansionArray[0] + ":" + expansionArray[1];
                    accountArray.splice(indexOfExpansion + 1, 0, expansionPrint);
                } break;
        }

        index++;
        currentInput = array[index];
    }

    console.log(accountArray.join(" "));
}
