function coinsFunction(arr) {
    const givenMoney = Number(arr[0]);
    let moneyTypes = [ 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01 ];

    let coinsCount = 0;
    let money = 0;
    for(let i = 0; i < moneyTypes.length; i++) {
        if(givenMoney > moneyTypes[i]) {
            money += Number(moneyTypes[i]);
            if(money > givenMoney) {
                money -= Number(moneyTypes[i]);
                continue;
            }
            coinsCount += 1;
            continue;
        } else if(givenMoney < moneyTypes[i]) {
            continue;
        } else if(givenMoney == moneyTypes[i]) {
            coinsCount += 1;
            break;
        }
    }

    console.log(coinsCount)
}

coinsFunction([1.23]);
coinsFunction([2]);
coinsFunction([0.56]);
coinsFunction([2.73]);
coinsFunction([0.59]);
coinsFunction([1.51]);
coinsFunction([3]);