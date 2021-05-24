function aluminumJoinery(arr) {
    const joineryCount = Number(arr[0]);
    const joineryType = arr[1];
    const deliveryType = arr[2];

    let prize = 0;
    if(joineryCount > 10) {
        if(deliveryType == 'With delivery') {
            switch(joineryType) {
                case '90X130':
                    if(joineryCount > 30 && joineryCount <= 60) {
                        prize += (110 - (0.05 * 110)) * joineryCount;
                        prize += 60;
                    } else if(joineryCount > 60) {
                        prize += (110 - (0.08 * 110)) * joineryCount;
                        prize += 60;
                    } else {
                        prize += 110 * joineryCount;
                        prize += 60;
                    }
                    break;
                case '100X150':
                    if(joineryCount > 40 && joineryCount <= 80) {
                        prize += (140 - (0.06 * 140)) * joineryCount;
                        prize += 60;
                    } else if(joineryCount > 80) {
                        prize += (140 - (0.1 * 140)) * joineryCount;
                        prize += 60;
                    } else {
                        prize += 140 * joineryCount;
                        prize += 60;
                    }
                    break;
                case '130X180':
                    if(joineryCount > 20 && joineryCount <= 50) {
                        prize += (190 - (0.07 * 190)) * joineryCount;
                        prize += 60;
                    } else if(joineryCount > 50) {
                        prize += (190 - (0.12 * 190)) * joineryCount;
                        prize += 60;
                    } else {
                        prize += 190 * joineryCount;
                        prize += 60;
                    }
                    break; 
                case '200X300':
                    if(joineryCount > 25 && joineryCount <= 50) {
                        prize += (250 - (0.09 * 250)) * joineryCount;
                        prize += 60;
                    } else if(joineryCount > 50) {
                        prize += (250 - (0.14 * 250)) * joineryCount;
                        prize += 60;
                    } else {
                        prize += 250 * joineryCount;
                        prize += 60;
                    }
                    break;      
            }
        } else if(deliveryType == 'Without delivery'){
            switch(joineryType) {
                case '90X130':
                    if(joineryCount > 30 && joineryCount <= 60) {
                        prize += (110 - (0.05 * 110)) * joineryCount
                    } else if(joineryCount > 60) {
                        prize += (110 - (0.08 * 110)) * joineryCount
                    } else {
                        prize += 110 * joineryCount;
                    }
                    break;
                case '100X150':
                    if(joineryCount > 40 && joineryCount <= 80) {
                        prize += (140 - (0.06 * 140)) * joineryCount;
                    } else if(joineryCount > 80) {
                        prize += (140 - (0.1 * 140)) * joineryCount;
                    } else {
                        prize += 140 * joineryCount;
                    }
                    break;
                case '130X180':
                    if(joineryCount > 20 && joineryCount <= 50) {
                        prize += (190 - (0.07 * 190)) * joineryCount;
                    } else if(joineryCount > 50) {
                        prize += (190 - (0.12 * 190)) * joineryCount;
                    } else {
                        prize += 190 * joineryCount;
                    }
                    break; 
                case '200X300':
                    if(joineryCount > 25 && joineryCount <= 50) {
                        prize += (250 - (0.09 * 250)) * joineryCount;
                    } else if(joineryCount > 50) {
                        prize += (250 - (0.14 * 250)) * joineryCount;
                    } else {
                        prize += 250 * joineryCount;
                    }
                    break;      
            }
        }
    } else {
        console.log('Invalid order');
        return;
    }

    if (joineryCount > 99) {
        prize -= (0.04 * prize);
    }

    console.log(`${prize.toFixed(2)} BGN`);
}

aluminumJoinery([40, '90X130', 'Without delivery']);
aluminumJoinery([105, '100X150', 'With delivery']);
aluminumJoinery([2, '130X180', 'With delivery']);