function foodMarket(input) {
    const priceKilogramForVegetables = Number(input[0]);
    const priceKilogramForFruit = Number(input[1]);
    const allVegetableKilograms = Number(input[2]);
    const allFruitKilograms = Number(input[3]);

    const vegetablePrice = priceKilogramForVegetables * allVegetableKilograms;
    const fruitPrice = priceKilogramForFruit * allFruitKilograms;
    const priceInBG = vegetablePrice + fruitPrice;
    const priceInEuro = priceInBG / 1.94;

    console.log(priceInEuro.toFixed(2));
}

foodMarket([0.194, 19.4, 10, 10]);
foodMarket([1.5, 2.5, 10, 10]);