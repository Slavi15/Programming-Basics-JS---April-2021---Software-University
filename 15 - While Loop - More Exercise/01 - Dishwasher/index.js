function dishwasherFunction(arr) {
    const washingBottles = Number(arr[0]);
    const washingML = washingBottles * 750;

    let neededML = 0;
    let platesCount = 0;
    let potsCount = 0;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] == 'End') {
            break;
        }

        if(i % 3 == 0) {
            neededML += Number(arr[i]) * 15;
            potsCount += Number(arr[i]);
        } else {
            neededML += Number(arr[i]) * 5;
            platesCount += Number(arr[i]);
        }
    }

    let leftML = Math.abs(washingML - neededML);
    if(washingML >= neededML) {
        console.log(`Detergent was enough!\n${platesCount} dishes and ${potsCount} pots were washed.\nLeftover detergent ${leftML} ml.`)
    } else {
        console.log(`Not enough detergent, ${leftML} ml. more necessary!`);
    }
}

dishwasherFunction([2, 53, 65, 55, 'End']);
dishwasherFunction([1, 10, 15, 10, 12, 13, 30]);