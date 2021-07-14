function sumNumbers(input) {
    let num = Number(input[0]);
    let i = 0;
    let sum = 0;
    while(sum < num) {
        ++i;
        sum += Number(input[i]);
    }
    console.log(sum);
}

sumNumbers([100, 10, 20, 30, 40]);
sumNumbers([20, 1, 2, 3, 4, 5, 6]);