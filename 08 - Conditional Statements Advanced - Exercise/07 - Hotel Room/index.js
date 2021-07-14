function hotelRoom(input) {
    const month = input[0];
    const numberOfNights = Number(input[1]);

    let apartmentPrice = 0;
    let studioPrice = 0;
    switch(month) {
        case 'May':
        case 'October':
            if((numberOfNights > 7) && (numberOfNights <= 14)) {
                studioPrice = (50 - (50 * 0.05)) * numberOfNights;
                apartmentPrice = 65 * numberOfNights;
            } else if(numberOfNights > 14) {
                studioPrice = (50 - (50 * 0.3)) * numberOfNights;
                apartmentPrice = (65 - (65 * 0.1)) * numberOfNights;
            } else {
                studioPrice = 50 * numberOfNights;
                apartmentPrice = 65 * numberOfNights;
            }
            break;
        case 'June':
        case 'September':
            if(numberOfNights > 14) {
                studioPrice = (75.2 - (75.2 * 0.2)) * numberOfNights;
                apartmentPrice = (68.7 - (68.7 * 0.1)) * numberOfNights;
            } else {
                studioPrice = 75.2 * numberOfNights;
                apartmentPrice = 68.7 * numberOfNights;
            }
            break;
        case 'July':
        case 'August':
            if(numberOfNights > 14) {
                studioPrice = numberOfNights * 76;
                apartmentPrice = (77 - (77 * 0.1)) * numberOfNights;
            } else {
                studioPrice = numberOfNights * 76;
                apartmentPrice = numberOfNights * 77;
            }
            break;
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.\nStudio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom(['May', 15]);
hotelRoom(['June', 14]);
hotelRoom(['August', 20]);