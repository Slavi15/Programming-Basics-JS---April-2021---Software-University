function fuelTankPartOne(input) {
    const fuelType = input[0];
    const fuelLitres = Number(input[1]);

    if((fuelType == 'Diesel') || (fuelType == 'Gasoline') || (fuelType == 'Gas')) {
        if(fuelLitres >= 25) {
            console.log(`You have enough ${fuelType.toLowerCase()}.`);
        } else {
            console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
        }
    } else {
        console.log('Invalid fuel!');
    }
}

fuelTankPartOne(['Diesel', 10]);
fuelTankPartOne(['Gasoline', 40]);
fuelTankPartOne(['Gas', 25]);
fuelTankPartOne(['Kerosene', 200]);