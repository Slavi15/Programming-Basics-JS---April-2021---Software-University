function pipesInPool(input) {
    const poolVolume = Number(input[0]);
    const flowRateFirst = Number(input[1]);
    const flowRateSecond = Number(input[2]);
    const absenceHours = Number(input[3]);

    const firstPipeWater = flowRateFirst * absenceHours;
    const secondPipeWater = flowRateSecond * absenceHours;
    const allWater = firstPipeWater + secondPipeWater;

    const firstPipePercentage = (firstPipeWater / allWater) * 100;
    const secondPipePercentage = (secondPipeWater / allWater) * 100;
    const poolWaterPercentage = (allWater / poolVolume) * 100;
    const overflowWater = Math.abs(poolVolume - allWater);

    if(allWater <= poolVolume) {
        console.log(`The pool is ${poolWaterPercentage.toFixed(2)}% full. Pipe 1: ${firstPipePercentage.toFixed(2)}%. Pipe 2: ${secondPipePercentage.toFixed(2)}%.`);
    } else {
        console.log(`For ${absenceHours.toFixed(2)} hours the pool overflows with ${overflowWater.toFixed(2)} liters.`)
    }
}

pipesInPool([1000, 100, 120, 3]);
pipesInPool([100, 100, 100, 2.5]);