function toyShop(input) {
    const tripPrice = Number(input[0]);
    const numberOfPuzzles = Number(input[1]);
    const numberOfDolls = Number(input[2]);
    const numberOfBears = Number(input[3]);
    const numberOfMinions = Number(input[4]);
    const numberOfTrucks = Number(input[5]);

    const puzzlePrice = 2.6;
    const dollPrice = 3;
    const bearPrice = 4.1;
    const minionPrice = 8.2;
    const truckPrice = 2;

    const numberOfToys = numberOfPuzzles + numberOfDolls + numberOfBears + numberOfMinions + numberOfTrucks;
    const toysSum = ((numberOfPuzzles * puzzlePrice) + (numberOfDolls * dollPrice) + (numberOfBears * bearPrice) + (numberOfMinions * minionPrice) + (numberOfTrucks * truckPrice));

    let moneyAfterRent;
    if(numberOfToys >= 50) {
        const discount = 0.25;
        const moneyAfterDiscount = (toysSum - (toysSum * discount));
        moneyAfterRent = (moneyAfterDiscount - (moneyAfterDiscount * 0.1));
        let money = Math.abs(moneyAfterRent - tripPrice);
        if(moneyAfterRent >= tripPrice) {
            console.log(`Yes! ${money.toFixed(2)} lv left.`);
        } else {
            console.log(`Not enough money! ${money.toFixed(2)} lv needed.`);
        }
    } else {
        moneyAfterRent = (toysSum - (toysSum * 0.1));
        let money = Math.abs(moneyAfterRent - tripPrice);
        if(moneyAfterRent >= tripPrice) {
            console.log(`Yes! ${money.toFixed(2)} lv left.`);
        } else {
            console.log(`Not enough money! ${money.toFixed(2)} lv needed.`);
        }
    }
}