function flowerShop(input) {
    const chrysanthemumCount = Number(input[0]);
    const rosesCount = Number(input[1]);
    const tulipsCount = Number(input[2]);
    const season = input[3];
    const isHoliday = input[4];

    let flowersCount = chrysanthemumCount + rosesCount + tulipsCount;

    let chrysanthemumPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;
    let flowersPrice = 0;
    switch(season) {
        case 'Spring':
            if(isHoliday == 'Y') {
                chrysanthemumPrice = chrysanthemumCount * 2;
                rosesPrice = rosesCount * 4.1;
                tulipsPrice = tulipsCount * 2.5;
                let allFlowerPrice = chrysanthemumPrice + rosesPrice + tulipsPrice
                flowersPrice = allFlowerPrice + (allFlowerPrice * 0.15);
            } else {
                chrysanthemumPrice =  chrysanthemumCount * 2;
                rosesPrice = rosesCount * 4.1;
                tulipsPrice = tulipsCount * 2.5;
                flowersPrice = chrysanthemumPrice + rosesPrice + tulipsPrice;
            }

            if(tulipsCount > 7) {
                flowersPrice -= flowersPrice * 0.05;
            }

            if(flowersCount > 20) {
                flowersPrice -= flowersPrice * 0.2;
            }
            break;
        case 'Summer':
            if(isHoliday == 'Y') {
                chrysanthemumPrice = chrysanthemumCount * 2;
                rosesPrice = rosesCount * 4.1;
                tulipsPrice = tulipsCount * 2.5;
                let allFlowerPrice = chrysanthemumPrice + rosesPrice + tulipsPrice
                flowersPrice = allFlowerPrice + (allFlowerPrice * 0.15);
            } else {
                chrysanthemumPrice =  chrysanthemumCount * 2;
                rosesPrice = rosesCount * 4.1;
                tulipsPrice = tulipsCount * 2.5;
                flowersPrice = chrysanthemumPrice + rosesPrice + tulipsPrice;
            }

            if(flowersCount > 20) {
                flowersPrice -= flowersPrice * 0.2;
            }
            break;
        case 'Autumn':
            if(isHoliday == 'Y') {
                chrysanthemumPrice = chrysanthemumCount * 3.75;
                rosesPrice = rosesCount * 4.5;
                tulipsPrice = tulipsCount * 4.15;
                let allFlowerPrice = chrysanthemumPrice + rosesPrice + tulipsPrice
                flowersPrice = allFlowerPrice + (allFlowerPrice * 0.15);
            } else {
                chrysanthemumPrice =  chrysanthemumCount * 3.75;
                rosesPrice = rosesCount * 4.5;
                tulipsPrice = tulipsCount * 4.15;
                flowersPrice = chrysanthemumPrice + rosesPrice + tulipsPrice;
            }

            if(flowersCount > 20) {
                flowersPrice -= flowersPrice * 0.2;
            }
            break;
        case 'Winter':
            if(isHoliday == 'Y') {
                chrysanthemumPrice = chrysanthemumCount * 3.75;
                rosesPrice = rosesCount * 4.5;
                tulipsPrice = tulipsCount * 4.15;
                let allFlowerPrice = chrysanthemumPrice + rosesPrice + tulipsPrice
                flowersPrice = allFlowerPrice + (allFlowerPrice * 0.15);
            } else {
                chrysanthemumPrice =  chrysanthemumCount * 3.75;
                rosesPrice = rosesCount * 4.5;
                tulipsPrice = tulipsCount * 4.15;
                flowersPrice = chrysanthemumPrice + rosesPrice + tulipsPrice;
            }

            if(rosesCount >= 10) {
                flowersPrice -= flowersPrice * 0.1;
            }

            if(flowersCount > 20) {
                flowersPrice -= flowersPrice * 0.2;
            }
            break;
    }
    
    let finalPrice = flowersPrice + 2;
    console.log(`${finalPrice.toFixed(2)}`);
}

flowerShop([2, 4, 8, 'Spring', 'Y']);
flowerShop([3, 10, 9, 'Winter', 'N']);
flowerShop([10, 10, 10, 'Autumn', 'N']);