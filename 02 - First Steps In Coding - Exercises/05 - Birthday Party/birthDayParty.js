// Description
// Write a function which calculates how much money a person needs to organize a party if you have this information.
// Price of cake = roomPrice * 20%
// Price of drinks = cakePrice - (cakePrice * 45%)
// Price of a clown = roomPrice / 3

// Input
// 1. Price of room - whole num [100 - 10000]

// Output
// What budget is needed for the party

// Input & Output examples
// Input: [2250] | Output: 3697.5

function birthDayParty(input) {
    const roomCost = Number(input[0]);
    const cakeCost = roomCost * 0.2;
    const drinksCost = cakeCost - (cakeCost * 0.45);
    const animatorCost = roomCost / 3;

    const sum = roomCost + cakeCost + drinksCost + animatorCost;
    console.log(sum);
};