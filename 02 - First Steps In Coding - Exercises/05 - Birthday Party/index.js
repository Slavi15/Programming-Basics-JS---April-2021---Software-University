function birthDayParty(input) {
    const roomCost = Number(input[0]);
    const cakeCost = roomCost * 0.2;
    const drinksCost = cakeCost - (cakeCost * 0.45);
    const animatorCost = roomCost / 3;

    const sum = roomCost + cakeCost + drinksCost + animatorCost;
    console.log(sum);
};