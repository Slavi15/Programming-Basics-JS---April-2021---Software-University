function depositCalculator(input) {
    const depositAmount = Number(input[0]);
    const depositTerm = Number(input[1]);
    const AIR = Number(input[2]) / 100;

    const sum = depositAmount + (depositTerm * (depositAmount * AIR) / 12);
    console.log(sum);
};

depositCalculator([200, 3, 5.7]);
depositCalculator([2350, 6, 7]);