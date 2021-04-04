// Description
// Write a function which calculates what amount of money you are going yo earn in the end of the deposit period with a fixed interest percent.
// Use this formula:    amount = depositedAmount + (depositTerm * (depositAmount * annualInterestRate) / 12)

// Input
// 1. Deposited value - real num [0 - 10000]
// 2. Term of deposit (in months) - whole num [1 - 12]
// 3. Annual Interest Rate - real num [0 - 10000]

// Output
// amount of money in the end of the period

// Input & Output examples
// Input: [200, 3, 5.7] | Output: 202.85

function depositCalculator(input) {
    const depositAmount = Number(input[0]);
    const depositTerm = Number(input[1]);
    const AIR = Number(input[2]) / 100;

    const sum = depositAmount + (depositTerm * (depositAmount * AIR) / 12);
    console.log(sum);
};