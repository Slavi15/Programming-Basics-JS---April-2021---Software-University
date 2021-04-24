function sumOfNumbers(input) {
    const num = Number(input[0]).toString();

    let sum = 0;
    for(let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers([1234]);
sumOfNumbers([564891]);