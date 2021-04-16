function fishLand(input) {
    const priceForSalmonKilogram = Number(input[0]);
    const priceForSpratKilogram = Number(input[1]);
    const bonitoKilograms = Number(input[2]);
    const mackerelKilograms = Number(input[3]);
    const shellKilograms = Number(input[4]);

    const bonitoPrice = priceForSalmonKilogram + (priceForSalmonKilogram * 0.6);
    const mackerelPrice = priceForSpratKilogram + (priceForSpratKilogram * 0.8);
    const shellPriceForKilogram = 7.5;

    const finalBonitoPrice = bonitoKilograms * bonitoPrice;
    const finalMackerelPrice = mackerelKilograms * mackerelPrice;
    const shellPrice = shellPriceForKilogram * shellKilograms;

    const finalPrice = finalBonitoPrice + finalMackerelPrice + shellPrice;
    console.log(finalPrice.toFixed(2));
}

fishLand([6.9, 4.2, 1.5, 2.5, 1]);
fishLand([5.55, 3.57, 4.3, 3.6, 7]);