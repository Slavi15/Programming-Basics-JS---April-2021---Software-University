function eggPainting(arr) {
    const eggSize = arr[0];
    const eggColor = arr[1];
    const number = Number(arr[2]);

    let prize = 0;
    if(eggSize == 'Large') {
        switch(eggColor) {
            case 'Red':
                prize += 16;
                break;
            case 'Green':
                prize += 12;
                break;
            case 'Yellow':
                prize += 9;
                break;
        }
    } else if(eggSize == 'Medium') {
        switch(eggColor) {
            case 'Red':
                prize += 13;
                break;
            case 'Green':
                prize += 9;
                break;
            case 'Yellow':
                prize += 7;
                break;
        }
    } else if(eggSize == 'Small') {
        switch(eggColor) {
            case 'Red':
                prize += 9;
                break;
            case 'Green':
                prize += 8;
                break;
            case 'Yellow':
                prize += 5;
                break;
        }
    }

    let finalPrize = prize * number;
    let prizeAfterTax = finalPrize - (0.35 * finalPrize);

    console.log(`${prizeAfterTax.toFixed(2)} leva.`);
}

eggPainting(['Large', 'Red', 7]);
eggPainting(['Medium', 'Green', 5]);
eggPainting(['Small', 'Yellow', 3]);