function fishingBoat(input) {
    const budget = Number(input[0]);
    const season = input[1];
    const fisherCount = Number(input[2]);

    let price = 0;
    switch(season) {
        case 'Spring':
            price = 3000;
            if(fisherCount <= 6) {
                price -= price * 0.1;
            } else if((fisherCount >= 7) && (fisherCount <= 11)) {
                price -= price * 0.15;
            } else if(fisherCount >= 12) {
                price -= price * 0.25;
            }

            if(fisherCount % 2 == 0) {
                price -= price * 0.05;
            }
            break;
        case 'Summer':
            price = 4200;
            if(fisherCount <= 6) {
                price -= price * 0.1;
            } else if((fisherCount >= 7) && (fisherCount <= 11)) {
                price -= price * 0.15;
            } else if(fisherCount >= 12) {
                price -= price * 0.25;
            }

            if(fisherCount % 2 == 0) {
                price -= price * 0.05;
            }
            break;
        case 'Autumn':
            price = 4200;
            if(fisherCount <= 6) {
                price -= price * 0.1;
            } else if((fisherCount >= 7) && (fisherCount <= 11)) {
                price -= price * 0.15;
            } else if(fisherCount >= 12) {
                price -= price * 0.25;
            }
            break;
        case 'Winter':
            price = 2600;
            if(fisherCount <= 6) {
                price -= price * 0.1;
            } else if((fisherCount >= 7) && (fisherCount <= 11)) {
                price -= price * 0.15;
            } else if(fisherCount >= 12) {
                price -= price * 0.25;
            }

            if(fisherCount % 2 == 0) {
                price -= price * 0.05;
            }
            break;
    }

    let leftMoney = Math.abs(budget - price);

    if(budget >= price) {
        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${leftMoney.toFixed(2)} leva.`)
    }
}

fishingBoat([3000, 'Summer', 11]);
fishingBoat([3600, 'Autumn', 6]);
fishingBoat([2000, 'Winter', 13]);