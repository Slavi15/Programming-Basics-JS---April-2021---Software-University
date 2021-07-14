function logisticsFunction(arr) {
    arr.shift();
    let money = 0;
    let numberOfVehicles = 0;
    let bus = 0;
    let trucks = 0;
    let trains = 0;

    for(let i = 0; i < arr.length; i++) {
        numberOfVehicles += Number(arr[i]);
        if(arr[i] <= 3) {
            bus += Number(arr[i]);
            money += Number(arr[i]) * 200;
        } else if(arr[i] >= 4 && arr[i] <= 11) {
            trucks += Number(arr[i]);
            money += Number(arr[i]) * 175;
        } else if(arr[i] >= 12) {
            trains += Number(arr[i]);
            money += Number(arr[i]) * 120;
        }
    }

    let tonAverage = money / numberOfVehicles;
    let busPercent = (bus / numberOfVehicles) * 100;
    let truckPercent = (trucks / numberOfVehicles) * 100;
    let trainPercent = (trains / numberOfVehicles) * 100;

    console.log(`${tonAverage.toFixed(2)}\n${busPercent.toFixed(2)}%\n${truckPercent.toFixed(2)}%\n${trainPercent.toFixed(2)}%`)
}

logisticsFunction([4, 1, 5, 16, 3]);
logisticsFunction([5, 2, 10, 20, 1, 7]);