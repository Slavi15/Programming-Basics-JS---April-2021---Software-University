function skiTrip(input) {
    const days = Number(input[0]);
    const room = input[1];
    const score = input[2];

    const flatForNightPrice = 25;
    const presidentFlatForNightPrice = 35;
    const roomForOnePrice = 18;

    let price = 0;
    let withDiscountPrice = 0;
    switch(room) {
        case 'room for one person':
            price = (days - 1) * roomForOnePrice;

            if(score == 'positive') {
                price += price * 0.25;
            } else if(score == 'negative') {
                price -= price * 0.1;
            }
            console.log(price.toFixed(2));
            break;
        case 'apartment':
            if(days < 10) {
                price = (days - 1) * flatForNightPrice;
                withDiscountPrice = price - (price * 0.3);
            } else if((days >= 10) && (days <= 15)) {
                price = (days - 1) * flatForNightPrice;
                withDiscountPrice = price - (price * 0.35);
            } else if(days > 15) {
                price = (days - 1) * flatForNightPrice;
                withDiscountPrice = price - (price * 0.5);
            }

            if(score == 'positive') {
                withDiscountPrice += withDiscountPrice * 0.25;
            } else if(score == 'negative') {
                withDiscountPrice -= withDiscountPrice * 0.1;
            }
            console.log(withDiscountPrice.toFixed(2));
            break;
        case 'president apartment':
            if(days < 10) {
                price = (days - 1) * presidentFlatForNightPrice;
                withDiscountPrice = price - (price * 0.1);
            } else if((days >= 10) && (days <= 15)) {
                price = (days - 1) * presidentFlatForNightPrice;
                withDiscountPrice = price - (price * 0.15);
            } else if(days > 15) {
                price = (days - 1) * presidentFlatForNightPrice;
                withDiscountPrice = price - (price * 0.2);
            }

            if(score == 'positive') {
                withDiscountPrice += withDiscountPrice * 0.25;
            } else if(score == 'negative') {
                withDiscountPrice -= withDiscountPrice * 0.1;
            }
            console.log(withDiscountPrice.toFixed(2));
            break;
    }
}

skiTrip([14, 'apartment', 'positive']);
skiTrip([30, 'president apartment', 'negative']);
skiTrip([12, 'room for one person', 'positive']);
skiTrip([2, 'apartment', 'positive']);