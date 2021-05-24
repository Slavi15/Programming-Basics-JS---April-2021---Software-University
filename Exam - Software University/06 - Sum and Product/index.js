function sumAndProduct(input) {
    const number = Number(input[0]);
    let stringed = number.toString();

    let array = [];
    for(let a = 1; a <= 9; a++) {
        for(let b = 9; b >= a; b--) {
            for(let c = 0; c <= 9; c++) {
                for(let d = 9; d >= c; d--) {
                    let sum = a + b + c + d;
                    let multiplication = a * b * c * d;
                    let divided = Math.floor(multiplication / sum)

                    if((sum == multiplication) && (stringed[stringed.length - 1] == 5)) {
                        array.push(`${a}${b}${c}${d}`);
                    }
                    
                    if((divided == 3) && (number % 3 == 0)) {
                        array.push(`${d}${c}${b}${a}`);
                    }
                }
            }
        }
    }

    if(array.length > 0) {
        console.log(array.shift());
    } else {
        console.log('Nothing found');
    }
}

sumAndProduct([123]);
sumAndProduct([145]);
sumAndProduct([214]);