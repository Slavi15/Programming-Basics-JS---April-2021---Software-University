function bikeRace(input) {
    const youngRacers = Number(input[0]);
    const adultRacers = Number(input[1]);
    const trackType = input[2];

    let youngPrice = 0;
    let adultPrice = 0;
    switch(trackType) {
        case 'trail':
            youngPrice = youngRacers * 5.5;
            adultPrice = adultRacers * 7;
            break;
        case 'cross-country':
            if(youngRacers + adultRacers >= 50) {
                youngPrice = youngRacers * (8 - (8 * 0.25));
                adultPrice = adultRacers * (9.5 - (9.5 * 0.25));
            } else {
                youngPrice = youngRacers * 8;
                adultPrice = adultRacers * 9.5;
            }
            break;
        case 'downhill':
            youngPrice = youngRacers * 12.25;
            adultPrice = adultRacers * 13.75;
            break;
        case 'road':
            youngPrice = youngRacers * 20;
            adultPrice = adultRacers * 21.5;
            break;
    }

    const allMoney = adultPrice + youngPrice;
    const moneyAfterExpenses = allMoney - (allMoney * 0.05);

    console.log(`${moneyAfterExpenses.toFixed(2)}`);
}

bikeRace([10, 20, 'trail']);
bikeRace([20, 25, 'cross-country']);
bikeRace([30, 25, 'cross-country']);
bikeRace([10, 10, 'downhill']);
bikeRace([3, 40, 'road']);