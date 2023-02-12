function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) { 
brokenHelmetCount = 0;
brokenSwordCount = 0;
brokenShieldCount = 0;
brokenArmorCount = 0;

for(currentLostBattle = 1; currentLostBattle <= lostFightsCount; currentLostBattle++) {

if(currentLostBattle % 2 === 0) {
brokenHelmetCount++;
}

if(currentLostBattle % 3 === 0) {
brokenSwordCount++;
}   

if(currentLostBattle % 2 === 0 && currentLostBattle % 3 === 0) {
brokenShieldCount++;

if(brokenShieldCount % 2 === 0) {
brokenArmorCount++;
}}

}

let totalSum = brokenHelmetCount * helmetPrice + brokenSwordCount * swordPrice + brokenShieldCount * shieldPrice + brokenArmorCount * armorPrice;
console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`);
}
