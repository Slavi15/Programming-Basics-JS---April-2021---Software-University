function backToThePast(input) {
    let heirMoney = Number(input[0]) - 12000;
    const year = Number(input[1]);

    let age = 18;
    for(let i = 1801; i <= year; i++) {
        age++;
        if(i % 2 == 0) {
            heirMoney -= 12000;
        } else {
            heirMoney -= 12000 + (50 * age);
        }
    }

    let leftMoney = Math.abs(heirMoney);
    if(heirMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${heirMoney.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${leftMoney.toFixed(2)} dollars to survive.`);
    }
}

backToThePast([50000, 1802]);
backToThePast([100000.15, 1808]);