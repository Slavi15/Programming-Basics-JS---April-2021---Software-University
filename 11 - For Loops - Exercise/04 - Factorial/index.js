function factorialFunction(input) {
    let num = Number(input[0]);

    let result = 1;
    for(let i = 1; i <= num; i++) {
        result *= i;
    }
    console.log(result);
}

factorialFunction([4]);
factorialFunction([8]);