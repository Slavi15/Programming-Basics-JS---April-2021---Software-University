function billsFunction(arr) {
    let monthsCount = Number(arr[0]);
    arr.shift();

    let electricityPrice = 0;
    let waterPrice = monthsCount * 20;
    let wifiPrice = monthsCount * 15;
    let otherPrice = 0;

    for(let i = 0; i < arr.length; i++) {
        electricityPrice += Number(arr[i]);
        otherPrice += (Number(arr[i]) + 20 + 15) + ((Number(arr[i]) + 20 + 15) * 0.2);
    }

    let averagePrice = (electricityPrice + waterPrice + wifiPrice + otherPrice) / monthsCount;

    console.log(`Electricity: ${electricityPrice.toFixed(2)} lv`);
    console.log(`Water: ${waterPrice.toFixed(2)} lv`);
    console.log(`Internet: ${wifiPrice.toFixed(2)} lv`);
    console.log(`Other: ${otherPrice.toFixed(2)} lv`);
    console.log(`Average: ${averagePrice.toFixed(2)} lv`);
}

billsFunction([5, 68.63, 89.25, 132.53, 93.53, 63.22]);
billsFunction([8, 123.54, 231.54, 140.23, 100, 122.4, 430, 178.52, 64.2]);