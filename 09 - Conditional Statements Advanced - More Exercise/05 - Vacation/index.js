function vacation(input) {
    const budget = Number(input[0]);
    const season = input[1];

    let price = 0;
    let location = '';
    let placeForRelax = '';
    if(budget <= 1000) {
        placeForRelax = 'Camp';
        switch(season) {
            case 'Summer':
                location = 'Alaska';
                price = budget * 0.65;
                break;
            case 'Winter':
                location = 'Morocco';
                price = budget * 0.45;
                break;
        }
    } else if((budget > 1000) && (budget <= 3000)) {
        placeForRelax = 'Hut';
        switch(season) {
            case 'Summer':
                location = 'Alaska';
                price = budget * 0.8;
                break;
            case 'Winter':
                location = 'Morocco';
                price = budget * 0.6;
                break;
        }
    } else if(budget > 3000) {
        placeForRelax = 'Hotel';
        switch(season) {
            case 'Summer':
                location = 'Alaska';
                price = budget * 0.9;
                break;
            case 'Winter':
                location = 'Morocco';
                price = budget * 0.9;
                break;
        }
    }
    console.log(`${location} - ${placeForRelax} - ${price.toFixed(2)}`);
}

vacation([800, 'Summer']);
vacation([799.50, 'Winter']);
vacation([1100, 'Summer']);
vacation([2543.99, 'Winter']);
vacation([3460, 'Summer']);
vacation([5000, 'Winter']);