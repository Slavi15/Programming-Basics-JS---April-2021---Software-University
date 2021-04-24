function cleverLily(input) {
    const lilyAge = Number(input[0]);
    const washerPrice = Number(input[1]);
    const toyPrice = Number(input[2]);

    let money = 0;
    let allMoney = 0;
    let allToysPrice = 0;
    for(let i = 1; i <= lilyAge; i++) {
        if(i % 2 == 0) {
            money += 10;
            allMoney += money;
        } else {
            allToysPrice += toyPrice;
        }
    }
    let savedMoney = allMoney + allToysPrice - (Math.floor(lilyAge / 2));
    let leftMoney = Math.abs(savedMoney - washerPrice);

    if(savedMoney >= washerPrice) {
        console.log(`Yes! ${leftMoney.toFixed(2)}`);
    } else {
        console.log(`No! ${leftMoney.toFixed(2)}`);
    }
}

cleverLily([10, 170, 6]);
cleverLily([21, 1570.98, 3]);