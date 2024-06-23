function coffeeTask(coffeearr, numberOfCommands, ...data) {
    coffeearr = coffeearr.split(" ");

    for (let i = 0; i < numberOfCommands; i++) {
        const command = data[i].split(" ")[0];

        if (command === "Include") {
            coffeearr.push(data[i].split(" ")[1]);
        
        } else if (command === "Remove") {
            const removingPosition = data[i].split(" ")[1];
            let numberOfRemovals = Number(data[i].split(" ")[2]);
            if (numberOfRemovals > coffeearr.length) {
                continue;
            }

            if (removingPosition === "first") {
                while (numberOfRemovals > 0) {
                    coffeearr.shift();
                    numberOfRemovals--;
                }
        
            } else if (removingPosition === "last") {
                while (numberOfRemovals > 0) {
                    coffeearr.pop();
                    numberOfRemovals--;
                }
            }
        
        } else if (command === "Prefer") {
            const firstIndex = Number(data[i].split(" ")[1]);
            const secondIndex = Number(data[i].split(" ")[2]);
            
            if (
                firstIndex >= 0 && firstIndex < coffeearr.length && 
                secondIndex >= 0 && secondIndex < coffeearr.length
            ) {
                const temp = coffeearr[firstIndex];
                coffeearr[firstIndex] = coffeearr[secondIndex];
                coffeearr[secondIndex] = temp;
            }
        } else if (command === "Reverse") {
            coffeearr.reverse();
        }
    }

    console.log(`Coffees:\n${coffeearr.join(" ")}`);
}
