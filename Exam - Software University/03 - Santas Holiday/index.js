function santasHoliday(input) {
    const daysCount = Number(input[0]);
    const roomType = input[1];
    const mark = input[2];

    let nightsCount = daysCount - 1;
    let roomForOnePrice = nightsCount * 18;
    let apartmentPrice = nightsCount * 25;
    let presidentPrice = nightsCount * 35;

    if(roomType == 'apartment') {
        if(daysCount < 10) {
            apartmentPrice -= (0.3 * apartmentPrice);
        } else if(daysCount >= 10 && daysCount <= 15) {
            apartmentPrice -= (0.35 * apartmentPrice);
        } else if(daysCount > 15) {
            apartmentPrice -= (0.5 * apartmentPrice);
        }
    } else if(roomType == 'president apartment') {
        if(daysCount < 10) {
            presidentPrice -= (0.1 * presidentPrice);
        } else if(daysCount >= 10 && daysCount <= 15) {
            presidentPrice -= (0.15 * presidentPrice);
        } else if(daysCount > 15) {
            presidentPrice -= (0.2 * presidentPrice);
        }
    }

    if(mark == 'positive') {
        switch(roomType) {
            case 'room for one person':
                roomForOnePrice += (0.25 * roomForOnePrice);
                break;
            case 'apartment':
                apartmentPrice += (0.25 * apartmentPrice);
                break;
            case 'president apartment':
                presidentPrice += (0.25 * presidentPrice);
                break;
        }
    } else if(mark == 'negative') {
        switch(roomType) {
            case 'room for one person':
                roomForOnePrice -= (0.1 * roomForOnePrice);
                break;
            case 'apartment':
                apartmentPrice -= (0.1 * apartmentPrice);
                break;
            case 'president apartment':
                presidentPrice -= (0.1 * presidentPrice);
                break;
        }
    }

    switch(roomType) {
        case 'room for one person':
            console.log(`${roomForOnePrice.toFixed(2)}`);
            break;
        case 'apartment':
            console.log(`${apartmentPrice.toFixed(2)}`);
            break;
        case 'president apartment':
            console.log(`${presidentPrice.toFixed(2)}`);
            break;
    }
}

santasHoliday([14, 'apartment', 'positive']);
santasHoliday([30, 'president apartment', 'negative']);
santasHoliday([12, 'room for one person', 'positive']);
santasHoliday([2, 'apartment', 'positive']);