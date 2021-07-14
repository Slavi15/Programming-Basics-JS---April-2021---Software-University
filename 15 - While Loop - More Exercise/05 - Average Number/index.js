function averageNumber(input) {
    const numbersCount = Number(input[0]);
    input.shift();

    let sum = 0;
    for(let i = 0; i < input.length; i++) {
        sum += Number(input[i]);
        continue;
    }

    let averageNumber = sum / numbersCount;
    console.log(averageNumber.toFixed(2));
}

averageNumber([4, 3, 2, 4, 2]);
averageNumber([2, 6, 4]);
averageNumber([3, 82, 43, 22]);
averageNumber([4, 95, 23, 76, 23]);