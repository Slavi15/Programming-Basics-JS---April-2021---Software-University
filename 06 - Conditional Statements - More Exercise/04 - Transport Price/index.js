function transportPrice(input) {
    const kilometers = Number(input[0]);
    const text = input[1];

    let price = 0;
    if((kilometers < 20) && (text == 'day')) {
        price = 0.7 + (0.79 * kilometers);
        console.log(price.toFixed(2));
    } else if((kilometers < 20) && (text == 'night')) {
        price = 0.7 + (0.9 * kilometers);
        console.log(price.toFixed(2));
    }

    if((kilometers >= 20) && (kilometers < 100)) {
        price = 0.09 * kilometers;
        console.log(price.toFixed(2));
    }

    if(kilometers >= 100) {
        price = 0.06 * kilometers;
        console.log(price.toFixed(2));
    }
}

transportPrice([5, 'day']);
transportPrice([7, 'night']);
transportPrice([25, 'day']);
transportPrice([180, 'night']);