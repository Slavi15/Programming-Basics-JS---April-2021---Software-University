function fuelTankPartTwo(input) {
    const fuelType = input[0];
    const fuelLitres = Number(input[1]);
    const card = input[2];

    const gasolinePriceForLitre = 2.22;
    const gasolinePriceLitreWithCard = 2.22 - 0.18;

    const dieselPriceForLitre = 2.33;
    const dieselPriceLitreWithCard = 2.33 - 0.12;

    const gasPriceForLitre = 0.93;
    const gasPriceLitreWithCard = 0.93 - 0.08;

    const gasolinePrice = fuelLitres * gasolinePriceForLitre;
    const gasolinePriceWithCard = fuelLitres * gasolinePriceLitreWithCard;

    const dieselPrice = fuelLitres * dieselPriceForLitre;
    const dieselPriceWithCard = fuelLitres * dieselPriceLitreWithCard;

    const gasPrice = fuelLitres * gasPriceForLitre;
    const gasPriceWithCard = fuelLitres * gasPriceLitreWithCard;

    let price = 0;
    if((fuelType == 'Gasoline') && (card == 'Yes')) {
        price = gasolinePriceWithCard;
    } else if((fuelType == 'Gasoline') && (card == 'No')) {
        price = gasolinePrice;
    } else if((fuelType == 'Gas') && (card == 'Yes')) {
        price = gasPriceWithCard;
    } else if((fuelType == 'Gas') && (card == 'No')) {
        price = gasPrice;
    } else if((fuelType == 'Diesel') && (card == 'Yes')) {
        price = dieselPriceWithCard;
    } else if((fuelType == 'Diesel') && (card == 'No')) {
        price = dieselPrice;
    }

    if((fuelLitres >= 20) && (fuelLitres <= 25)) {
        price -= price * 0.08;
    } else if(fuelLitres > 25) {
        price -= price * 0.1;
    }

    console.log(`${price.toFixed(2)} lv.`);
}

fuelTankPartTwo(['Gas', 30, 'Yes']);
fuelTankPartTwo(['Gasoline', 25, 'No']);
fuelTankPartTwo(['Diesel', 19, 'No']);