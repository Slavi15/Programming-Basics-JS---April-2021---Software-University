function petShop(input) {
    let numberOfDogs = Number(input[0]);
    let numberOfOtherAnimals = Number(input[1]);

    let dogFoodCost = (numberOfDogs * 2.5);
    let otherFoodCost = (numberOfOtherAnimals * 4);
    let costForAll = (dogFoodCost + otherFoodCost);

    console.log(`${costForAll} lv.`);
}

petShop([5, 4]);