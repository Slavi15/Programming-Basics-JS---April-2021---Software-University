function godzillaVsKong(input) {
    const budget = Number(input[0]);
    let numberOfStatists = Number(input[1]);
    let priceForCloth = Number(input[2]);

    let decorPrice = budget * 0.1;

    if(numberOfStatists > 150) {
        priceForCloth -= priceForCloth * 0.1;
    }

    let totalPrice = (priceForCloth * numberOfStatists) + decorPrice;
    let money = Math.abs(totalPrice - budget);

    if(totalPrice > budget) {
        console.log(`Not enough money!\nWingard needs ${money.toFixed(2)} leva more.`)
    } else {
        console.log(`Action!\nWingard starts filming with ${money.toFixed(2)} leva left.`)
    }
}

godzillaVsKong([20000, 120, 55.5]);
godzillaVsKong([9587.88, 222, 55.68])