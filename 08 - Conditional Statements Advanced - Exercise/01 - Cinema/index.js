function cinema(input) {
    const filmType = input[0];
    const rows = Number(input[1]);
    const columns = Number(input[2]);

    let allPlaces = rows * columns;
    let finalMoney = 0;
    switch(filmType) {
        case 'Premiere':
            finalMoney = allPlaces * 12;
            console.log(`${finalMoney.toFixed(2)} leva`);
            break;
        case 'Normal':
            finalMoney = allPlaces * 7.5;
            console.log(`${finalMoney.toFixed(2)} leva`);
            break;
        case 'Discount':
            finalMoney = allPlaces * 5;
            console.log(`${finalMoney.toFixed(2)} leva`);
            break;
    }
}

cinema(['Premiere', 10, 12]);
cinema(['Normal', 21, 13]);
cinema(['Discount', 12, 30]);