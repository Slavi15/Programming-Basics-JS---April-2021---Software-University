function maidenParty(input) {
    const partyPrice = Number(input[0]);
    const loveLettersCount = Number(input[1]);
    const rosesCount = Number(input[2]);
    const keyholdersCount = Number(input[3]);
    const funnyPaintingsCount = Number(input[4]);
    const luckyLettersCount = Number(input[5]);

    let loveLettersPrice = loveLettersCount * 0.6;
    let rosesPrice = rosesCount * 7.2;
    let keyholdersPrice = keyholdersCount * 3.6;
    let funnyPaintingsPrice = funnyPaintingsCount * 18.2;
    let luckyLettersPrice = luckyLettersCount * 22;

    let allPrice = loveLettersPrice + rosesPrice + keyholdersPrice + funnyPaintingsPrice + luckyLettersPrice;
    let allCount = loveLettersCount + rosesCount + keyholdersCount + funnyPaintingsCount + luckyLettersCount;

    if(allCount >= 25) {
        allPrice -= (0.35 * allPrice);
    }

    let moneyAfterHosting = allPrice - (allPrice * 0.1);
    let leftMoney = Math.abs(partyPrice - moneyAfterHosting);

    if(moneyAfterHosting >= partyPrice) {
        console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${leftMoney.toFixed(2)} lv needed.`);
    }
}

maidenParty([40.8, 20, 25, 30, 50, 10]);
maidenParty([320, 8, 2, 5, 5, 1]);