function fruitShop(input) {
    const fruit = input[0];
    const day = input[1];
    const amount = Number(input[2]);

    switch(day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            switch(fruit) {
                case 'apple':
                    console.log((amount * 1.20).toFixed(2));
                    break;
                case 'banana':
                    console.log((amount * 2.50).toFixed(2));
                    break;
                case 'orange':
                    console.log((amount * 0.85).toFixed(2));
                    break;
                case 'grapefruit':
                    console.log((amount * 1.45).toFixed(2));
                    break;
                case 'kiwi':
                    console.log((amount * 2.70).toFixed(2));
                    break;
                case 'pineapple':
                    console.log((amount * 5.50).toFixed(2));
                    break;
                case 'grapes':
                    console.log((amount * 3.85).toFixed(2));
                    break;
                default:
                    console.log('error');
                    break;
            }
            break;
        case 'Saturday':
        case 'Sunday':
            switch(fruit) {
                case 'apple':
                    console.log((amount * 1.25).toFixed(2));
                    break;
                case 'banana':
                    console.log((amount * 2.70).toFixed(2));
                    break;
                case 'orange':
                    console.log((amount * 0.90).toFixed(2));
                    break;
                case 'grapefruit':
                    console.log((amount * 1.60).toFixed(2));
                    break;
                case 'kiwi':
                    console.log((amount * 3.00).toFixed(2));
                    break;
                case 'pineapple':
                    console.log((amount * 5.60).toFixed(2));
                    break;
                case 'grapes':
                    console.log((amount * 4.20).toFixed(2));
                    break;
                default:
                    console.log('error');
                    break;
            }
            break;
        default:
            console.log('error');
            break;
    }
}

fruitShop(['apple', 'Tuesday', 2]);
fruitShop(['orange', 'Sunday', 3]);
fruitShop(['kiwi', 'Monday', 2.5]);
fruitShop(['grapes', 'Saturday', 0.5]);
fruitShop(['tomato', 'Monday', 0.5]);