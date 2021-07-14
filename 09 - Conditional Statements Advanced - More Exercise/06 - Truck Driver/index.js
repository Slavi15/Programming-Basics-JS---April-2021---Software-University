function truckDriver(input) {
    const season = input[0];
    const kmInMonth = Number(input[1]);

    let price = 0;
    if(kmInMonth <= 5000) {
        switch(season) {
            case 'Spring':
            case 'Autumn':
                price = kmInMonth * 0.75 * 4;
                break;
            case 'Summer':
                price = kmInMonth * 0.90 * 4;
                break;
            case 'Winter':
                price = kmInMonth * 1.05 * 4;
                break;
        }
    } else if((kmInMonth > 5000) && (kmInMonth <= 10000)) {
        switch(season) {
            case 'Spring':
            case 'Autumn':
                price = kmInMonth * 0.95 * 4;
                break;
            case 'Summer':
                price = kmInMonth * 1.10 * 4;
                break;
            case 'Winter':
                price = kmInMonth * 1.25 * 4;
                break;
        }
    } else if((kmInMonth > 10000) && (kmInMonth <= 20000)) {
        switch(season) {
            case 'Spring':
            case 'Autumn':
            case 'Summer':
            case 'Winter':
                price = kmInMonth * 1.45 * 4;
                break;
        }
    }
    price -= price * 0.1;
    console.log(price.toFixed(2));
}

truckDriver(['Summer', 3455]);
truckDriver(['Winter', 4350]);
truckDriver(['Winter', 5678]);
truckDriver(['Winter', 16042]);
truckDriver(['Spring', 1600]);
truckDriver(['Autumn', 8600]);
truckDriver(['Spring', 16942]);