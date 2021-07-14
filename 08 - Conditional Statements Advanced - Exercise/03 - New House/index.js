function newHouse(input) {
    const flowerType = input[0];
    const flowerCount = Number(input[1]);
    const budget = Number(input[2]);

    let price = 0;
    switch(flowerType) {
        case 'Roses':
            price = flowerCount * 5;
            if(flowerCount > 80) {
                price -= price * 0.1;
            }
            break;
        case 'Dahlias':
            price = flowerCount * 3.8;
            if(flowerCount > 90) {
                price -= price * 0.15;
            }
            break;
        case 'Tulips':
            price = flowerCount * 2.8;
            if(flowerCount > 80) {
                price -= price * 0.15;
            }
            break;
        case 'Narcissus':
            price = flowerCount * 3;
            if(flowerCount < 120) {
                price += price * 0.15;
            }
            break;
        case 'Gladiolus':
            price = flowerCount * 2.5;
            if(flowerCount < 80) {
                price += price * 0.2;
            }
            break;
    }

    let leftMoney = Math.abs(budget - price);

    if(budget >= price) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${leftMoney.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${leftMoney.toFixed(2)} leva more.`);
    }
}

newHouse(['Roses', 55, 250]);
newHouse(['Tulips', 88, 260]);
newHouse(['Narcissus', 119, 360]);