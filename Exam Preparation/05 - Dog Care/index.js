function dogCare(arr) {
    const kilograms = Number(arr[0]);
    let kiloInGrams = kilograms * 1000;
    arr.shift();

    let grams = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 'Adopted') {
            break;
        }

        grams += Number(arr[i]);
    }

    let leftAmount = Math.abs(kiloInGrams - grams);
    if(kiloInGrams >= grams) {
        console.log(`Food is enough! Leftovers: ${leftAmount} grams.`);
    } else {
        console.log(`Food is not enough. You need ${leftAmount} grams more.`);
    }
}

dogCare([4, 130, 345, 400, 180, 230, 120, 'Adopted']);
dogCare([3, 1000, 1000, 1000, 'Adopted']);
dogCare([2, 999, 456, 999, 999, 123, 456, 'Adopted']);