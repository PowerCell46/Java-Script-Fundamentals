function pyramidOfKingDjoser (base, increment) {

    let stoneRequired = 0;
    let counter = 0;
    let lapisLazuliRequired = 0;
    let marbleRequired = 0;
    let goldRequired = 0;
    
    while(base - 2 > 0) {    
        
        currentStone = ((base * base) - ((base * 4) - 4)) * increment;
        stoneRequired += currentStone;
        currentOuterMaterial = (base * 4 - 4) * increment; 
        counter += 1;
        base -= 2;
        if (counter % 5 == 0) {
            lapisLazuliRequired += currentOuterMaterial;
        } else {
            marbleRequired += currentOuterMaterial;
        }
    }
    goldRequired += base * base * increment;
    
    console.log(`Stone required: ${Math.ceil(stoneRequired)}`);
    console.log(`Marble required: ${Math.ceil(marbleRequired)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliRequired)}`);
    console.log(`Gold required: ${Math.ceil(goldRequired)}`);
    console.log(`Final pyramid height: ${Math.floor(increment *(counter + 1))}`);
    
}
