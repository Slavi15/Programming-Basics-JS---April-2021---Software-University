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