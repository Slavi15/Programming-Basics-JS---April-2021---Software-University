function journey(input) {
    const budget = Number(input[0]);
    const season = input[1];

    let price = 0;
    let place = '';
    let holidayType = '';
    if(budget <= 100) {
        switch(season) {
            case 'summer':
                price = budget * 0.3;
                place = 'Bulgaria';
                holidayType = 'Camp';
                break;
            case 'winter':
                price = budget * 0.7;
                place = 'Bulgaria';
                holidayType = 'Hotel';
                break;
        }
    } else if((budget > 100) && (budget <= 1000)) {
        switch(season) {
            case 'summer':
                price = budget * 0.4;
                place = 'Balkans';
                holidayType = 'Camp';
                break;
            case 'winter':
                price = budget * 0.8;
                place = 'Balkans';
                holidayType = 'Hotel';
                break;
        }
    } else if(budget > 1000) {
        price = budget * 0.9;
        place = 'Europe';
        holidayType = 'Hotel';
    }
    console.log(`Somewhere in ${place}\n${holidayType} - ${price.toFixed(2)}`);
}

journey([50, 'summer']);
journey([75, 'winter']);
journey([312, 'summer']);
journey([678.53, 'winter']);
journey([1500, 'summer']);