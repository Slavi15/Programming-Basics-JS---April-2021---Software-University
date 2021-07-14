function smallShop(input) {
    const product = input[0];
    const city = input[1];
    const amount = Number(input[2]);

    let price = 0;
    if(city == 'Sofia') {
        switch(product) {
            case 'coffee':
                price = amount * 0.50;
                break;
            case 'water':
                price = amount * 0.80;
                break;
            case 'beer':
                price = amount * 1.20;
                break;
            case 'sweets':
                price = amount * 1.45;
                break;
            case 'peanuts':
                price = amount * 1.60;
                break;
        }
    } else if(city == 'Plovdiv') {
        switch(product) {
            case 'coffee':
                price = amount * 0.40;
                break;
            case 'water':
                price = amount * 0.70;
                break;
            case 'beer':
                price = amount * 1.15;
                break;
            case 'sweets':
                price = amount * 1.30;
                break;
            case 'peanuts':
                price = amount * 1.50;
                break;
        }
    } else if(city == 'Varna') {
        switch(product) {
            case 'coffee':
                price = amount * 0.45;
                break;
            case 'water':
                price = amount * 0.70;
                break;
            case 'beer':
                price = amount * 1.10;
                break;
            case 'sweets':
                price = amount * 1.35;
                break;
            case 'peanuts':
                price = amount * 1.55;
                break;
        }
    }
    console.log(price);
}

smallShop(['coffee', 'Varna', 2]);
smallShop(['peanuts', 'Plovdiv', 1]);
smallShop(['beer', 'Sofia', 6]);
smallShop(['water', 'Plovdiv', 3]);
smallShop(['sweets', 'Sofia', 2.23]);