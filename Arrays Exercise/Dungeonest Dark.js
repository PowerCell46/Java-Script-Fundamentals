function dungeonestDark(array) {
    let health = 100;
    let coins = 0;

    let string = array[0];
    let roomArray = string.split("|");
    let counter = 0;
    let theGameIsOver = false;

    for (let index = 0; index < Number(roomArray.length); index++) {
        let currentThing = roomArray[index];
        currentThing = currentThing.split(" ");
        let potionOrMonster = currentThing[0];
        let number = Number(currentThing[1]);
        counter++;

        switch (potionOrMonster) {

            case "potion":
                health += number;
                if (health > 100) {
                    let holder = health - 100;
                    number = number - holder;
                    health = 100;
                }
                console.log(`You healed for ${number} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;

            case "chest":
                coins += number;
                console.log(`You found ${number} coins.`);
                break;

            default:
                health -= number;
                if (health > 0) {
                    console.log(`You slayed ${potionOrMonster}.`);
                } else {
                    console.log(`You died! Killed by ${potionOrMonster}.`);
                    console.log(`Best room: ${counter}`);
                    theGameIsOver = true;
                    break;
                }
        }
        if (theGameIsOver === true) {
            break;
        }
    }

    if (theGameIsOver === false) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
