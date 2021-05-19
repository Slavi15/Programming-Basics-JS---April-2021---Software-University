function combinationsFunction(input) {
    const number = Number(input[0]);

    let countOfCombinations = 0;
    for(let i = 0; i <= number; i++) {
        for(let j = 0; j <= number; j++) {
            for(let k = 0; k <= number; k++) {
                if((i + j + k) == number) {
                    countOfCombinations += 1;
                }
            }
        }
    }
    console.log(countOfCombinations);
}

combinationsFunction([25]);
combinationsFunction([20]);
combinationsFunction([5]);