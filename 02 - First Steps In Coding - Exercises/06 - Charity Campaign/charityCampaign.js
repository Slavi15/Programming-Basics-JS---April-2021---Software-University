// Description
// There's an ongoing charity campaign. All pastry cooks from the country can attend.
// First we get the number of days for the campaign and the number of pastry cooks who will attend.
// Then we get the amount of cakes, waffles and pancakes which are going to be cooked by 1 pastry cook for 1 day.
// Price list:
// 1. Cake - 45
// 2. Waffle - 5.80
// 3. Pancake - 3.20
// 1/8 of the final sum is going to be used for paying the food expenses.
// Calculate the final sum after paying for the expenses

// Input
// 1. Number of days for the campaign - whole num [0 - 365]
// 2. Number of pastry cooks - whole num [0 - 1000]
// 3. Number of cakes - whole num [0 - 2000]
// 4. Number of waffles - whole num [0 - 2000]
// 5. Number of pancakes - whole num [0 - 2000]

// Output
// Collected money

// Input & Output examples
// Input: [23, 8, 14, 30, 16] | Output: 137687.2

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