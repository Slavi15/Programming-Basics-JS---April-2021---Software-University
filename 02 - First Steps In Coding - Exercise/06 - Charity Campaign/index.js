function charityCampaign(input) {
    const numberOfDays = Number(input[0]);
    const numberOfPeople = Number(input[1]);
    const numberOfCakes = Number(input[2]);
    const numberOfWaffles = Number(input[3]);
    const numberOfPancakes = Number(input[4]);

    const cakePrice = 45;
    const wafflePrice = 5.8;
    const panCakePrice = 3.2;

    const cakeSum = numberOfCakes * cakePrice;
    const waffleSum = numberOfWaffles * wafflePrice;
    const pancakeSum = numberOfPancakes * panCakePrice;

    const valueForOneDay = (cakeSum + waffleSum + pancakeSum) * numberOfPeople;
    const valueForCampaign = valueForOneDay * numberOfDays;
    const valueAfterLoss = valueForCampaign - (valueForCampaign / 8);

    console.log(valueAfterLoss);
};

charityCampaign([23, 8, 14, 30, 16]);
charityCampaign([131, 5, 9, 33, 46]);