function catDiet(input) {
    const fatPercent = Number(input[0]) / 100;
    const proteinPercent = Number(input[1]) / 100;
    const carboPercent = Number(input[2]) / 100;
    const calories = Number(input[3]);
    const waterPercent = Number(input[4]) / 100;

    let fatGrams = (fatPercent * calories) / 9;
    let proteinGrams = (proteinPercent * calories) / 4;
    let carboGrams = (carboPercent * calories) / 4;

    let foodWeight = fatGrams + proteinGrams + carboGrams;
    let caloriesForOneGram = calories / foodWeight;
    let caloriesWithoutWaterPercent = 1 - waterPercent;

    let caloriesInOneGram = caloriesWithoutWaterPercent * caloriesForOneGram;
    console.log(`${caloriesInOneGram.toFixed(4)}`);
}

catDiet([60, 25, 15, 2500, 60]);
catDiet([40, 40, 20, 3000, 40]);
catDiet([20, 60, 20, 1800, 50]);