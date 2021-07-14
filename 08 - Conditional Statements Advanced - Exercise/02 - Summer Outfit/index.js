function summerOutfit(input) {
    const temp = Number(input[0]);
    const partOfDay = input[1];

    let outfit = '';
    let shoes = '';
    if(partOfDay == 'Morning') {
        if((temp >= 10) && (temp <= 18)) {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        } else if((temp > 18) && (temp <= 24)) {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if(temp >= 25) {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        }
    } else if(partOfDay == 'Afternoon') {
        if((temp >= 10) && (temp <= 18)) {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if((temp > 18) && (temp <= 24)) {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else if(temp >= 25) {
            outfit = 'Swim Suit';
            shoes = 'Barefoot';
        }
    } else if(partOfDay == 'Evening') {
        if(temp >= 10) {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    }
    console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit([16, 'Morning']);
summerOutfit([22, 'Afternoon']);
summerOutfit([28, 'Evening']);