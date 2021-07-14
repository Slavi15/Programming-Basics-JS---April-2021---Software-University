function sequenceFunction(input) {
    let inputNumber = Number(input[0]);
    let num = 1;

    while(num <= inputNumber) {
        console.log(num);
        num = (2 * num) + 1;
    }
}

sequenceFunction([3]);
sequenceFunction([8]);
sequenceFunction([17]);
sequenceFunction([31]);