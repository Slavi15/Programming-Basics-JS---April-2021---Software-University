function flowerShop(input) {
    const magnoliaCount = Number(input[0]);
    const hyacinthCount = Number(input[1]);
    const roseCount = Number(input[2]);
    const cactusCount = Number(input[3]);
    const giftPrice = Number(input[4]);

    const oneMagnoliaPrice = 3.25;
    const oneHyacinthPrice = 4;
    const oneRosePrice = 3.5;
    const oneCactusPrice = 8;

    const magnoliaPrice = magnoliaCount * oneMagnoliaPrice;
    const hyacinthPrice = hyacinthCount * oneHyacinthPrice;
    const rosePrice = roseCount * oneRosePrice;
    const cactusPrice = cactusCount * oneCactusPrice;

    const price = magnoliaPrice + hyacinthPrice + rosePrice + cactusPrice;
    const priceAfterTaxes = price - (price * 0.05);

    const leftMoney = Math.abs(priceAfterTaxes - giftPrice);

    if(priceAfterTaxes >= giftPrice) {
        console.log(`She is left with ${Math.floor(leftMoney)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(leftMoney)} leva.`);
    }
}

flowerShop([2, 3, 5, 1, 50]);
flowerShop([15, 7, 5, 10, 100]);