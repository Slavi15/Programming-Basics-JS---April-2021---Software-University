// Description
// Write a function which calculates how much money are needed to pay the bill for food
// Price list:
// 1. raspberryPrice = strawberryPrice / 2
// 2. orangePrice = raspberryPrice - (raspberryPrice * 40%);
// 3. bananaPrice = raspberryPrice - (raspberryPrice * 80%);

// Input
// 1. Price of strawberry - real num [0 - 10000]
// 2. Amount of bananas in kilograms - real num [0 - 10000]
// 3. Amount of oranges in kilograms - real num [0 - 10000]
// 4. Amount of raspberries in kilograms - real num [0 - 10000]
// 5. Amount of strawberries in kilograms - real num [0 - 10000]

// Output
// Amount of money needed for paying the bill

// Input & Output examples
// Input: [48, 10, 3.3, 6.5, 1.7] | Output: 333.12

function fruitMarket(input) {
    const strawberryPrice = Number(input[0]);
    const bananaCount = Number(input[1]);
    const orangeCount = Number(input[2]);
    const raspberryCount = Number(input[3]);
    const strawberryCount = Number(input[4]);

    const raspberryPrice = strawberryPrice / 2;
    const orangePrice = raspberryPrice - (raspberryPrice * 0.4);
    const bananaPrice = raspberryPrice - (raspberryPrice * 0.8);

    const bananaSum = bananaCount * bananaPrice;
    const orangeSum = orangeCount * orangePrice;
    const raspberrySum = raspberryCount * raspberryPrice;
    const strawberrySum = strawberryCount * strawberryPrice;

    const finalSum = (bananaSum + orangeSum + raspberrySum + strawberrySum);
    console.log(finalSum);
};