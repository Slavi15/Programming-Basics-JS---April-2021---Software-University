function coinsFunction(arr) {
    const givenMoney = Number(arr[0]);
    let moneyTypes = [ 2.00, 1.00, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01 ];

    let coinsCount = 0;
    let money = 0;
    for(let i = 0; i < moneyTypes.length; i++) {
        if(givenMoney > moneyTypes[i]) {
            money += Number(moneyTypes[i]);
            if(money > givenMoney) {
                money -= Number(moneyTypes[i]);
            } else {
                coinsCount += 1;
            }
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