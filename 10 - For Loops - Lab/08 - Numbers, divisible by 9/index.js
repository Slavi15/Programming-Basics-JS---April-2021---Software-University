function divisibleByNine(input) {
    const firstNum = Number(input[0]);
    const secondNum = Number(input[1]);

    let sum = 0;
    let arr = [];
    for(let i = firstNum; i <= secondNum; i++) {
        if(i % 9 == 0) {
            sum += i;
            arr.push(i);
        }
    }
    console.log(`The sum: ${sum}\n${arr.join('\n')}`);
}

divisibleByNine([100, 200]);