function radioCrystals(array) {
  let finalThickness = Number(array[0]);

  let cutCounter = 0;
  let cutOperation = false;
  let lapCounter = 0;
  let lapOperation = false;
  let grindCounter = 0;
  let grindOperation = false;
  let etchCounter = 0;
  let etchOperation = false;
  let xRayCounter = 0;
  let xRayWasUsed = false;

  for (let index = 1; index < Number(array.length); index++) {
    let currentCrystalThickness = Number(array[index]);
    console.log(`Processing chunk ${currentCrystalThickness} microns`);

    while (currentCrystalThickness / 4 >= finalThickness) {
      // Cut operation
      currentCrystalThickness = currentCrystalThickness / 4;
      cutCounter++;
      cutOperation = true;
    }
    if (cutOperation === true) {
      console.log(`Cut x${cutCounter}`);
      console.log("Transporting and washing");
      currentCrystalThickness = Math.floor(currentCrystalThickness);
    }

    while (
      currentCrystalThickness - ((currentCrystalThickness / 100) * 20) >= finalThickness) {
      // Lap operation
      currentCrystalThickness = currentCrystalThickness - ((currentCrystalThickness / 100) * 20);
      lapCounter++;
      lapOperation = true;
    }
    if (lapOperation === true) {
      console.log(`Lap x${lapCounter}`);
      console.log("Transporting and washing");
      currentCrystalThickness = Math.floor(currentCrystalThickness);
    }

    while (currentCrystalThickness - 20 >= finalThickness) {
      // Grind operation
      currentCrystalThickness -= 20;
      grindCounter++;
      grindOperation = true;
    }
    if (grindOperation === true) {
      console.log(`Grind x${grindCounter}`);
      console.log("Transporting and washing");
      currentCrystalThickness = Math.floor(currentCrystalThickness);
    }

    while (currentCrystalThickness - 2 >= finalThickness - 1) {
      // Etch operation
      currentCrystalThickness -= 2;
      etchCounter++;
      etchOperation = true;
    }
    if (etchOperation === true) {
      console.log(`Etch x${etchCounter}`);
      console.log("Transporting and washing");
      currentCrystalThickness = Math.floor(currentCrystalThickness);
    }

    if (currentCrystalThickness < finalThickness) {
      xRayWasUsed = true;
      xRayCounter++;
    }
    if (xRayWasUsed === true && xRayCounter === 1) {
      // X-ray operation
      currentCrystalThickness++;
      console.log(`X-ray x${xRayCounter}`);
    }

    if (currentCrystalThickness === finalThickness) {
      console.log(`Finished crystal ${currentCrystalThickness} microns`);
      cutCounter = 0;
      cutOperation = false;
      lapCounter = 0;
      lapOperation = false;
      grindCounter = 0;
      grindOperation = false;
      etchCounter = 0;
      etchOperation = false;
      xRayCounter = 0;
      xRayWasUsed = false;
    }
  }

}
