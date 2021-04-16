function pets(input) {
    const days = Number(input[0]);
    const leftFoodKilograms = Number(input[1]);
    const foodPerDayForDog = Number(input[2]);
    const foodPerDayForCat = Number(input[3]);
    const foodPerDayForTortoise = Number(input[4]) / 1000;

    const neededFoodDog = days * foodPerDayForDog;
    const neededFoodCat = days * foodPerDayForCat;
    const neededFoodTortoise = days * foodPerDayForTortoise;

    const neededFood = neededFoodDog + neededFoodCat + neededFoodTortoise;
    const leftFood = Math.abs(neededFood - leftFoodKilograms);

    if(leftFoodKilograms >= neededFood) {
        console.log(`${Math.floor(leftFood)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(leftFood)} more kilos of food are needed.`);
    }
}

pets([2, 10, 1, 1, 1200]);
pets([5, 10, 2.1, 0.8, 321]);