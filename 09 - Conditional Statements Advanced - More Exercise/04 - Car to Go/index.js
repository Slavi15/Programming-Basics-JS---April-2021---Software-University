function carToGo(input) {
    const budget = Number(input[0]);
    const season = input[1];

    let carClass = '';
    let carType = '';
    let carPrice = 0;
    if(budget <= 100) {
        carClass = 'Economy class';
        switch(season) {
            case 'Summer':
                carType = 'Cabrio';
                carPrice = budget * 0.35;
                break;
            case 'Winter':
                carType = 'Jeep';
                carPrice = budget * 0.65;
                break;
        }
    } else if((budget > 100) && (budget <= 500)) {
        carClass = 'Compact class';
        switch(season) {
            case 'Summer':
                carType = 'Cabrio';
                carPrice = budget * 0.45;
                break;
            case 'Winter':
                carType = 'Jeep';
                carPrice = budget * 0.80;
                break;
        }
    } else if(budget > 500) {
        carClass = 'Luxury class';
        switch(season) {
            case 'Summer':
            case 'Winter':
                carType = 'Jeep';
                carPrice = budget * 0.9;
                break;
        }
    }
    console.log(`${carClass}\n${carType} - ${carPrice.toFixed(2)}`);
}

carToGo([450, 'Summer']);
carToGo([450, 'Winter']);
carToGo([99.99, 'Summer']);
carToGo([70.50, 'Winter']);
carToGo([1010, 'Summer']);
carToGo([1010, 'Winter']);