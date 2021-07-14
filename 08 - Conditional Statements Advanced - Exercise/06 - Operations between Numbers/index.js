function operationsBetweenNums(input) {
    const numOne = Number(input[0]);
    const numTwo = Number(input[1]);
    const operator = input[2];

    let result = 0;
    let evenOrOdd = '';
    switch(operator) {
        case '+':
            result = numOne + numTwo;
            if(result % 2 == 0) {
                evenOrOdd = 'even';
            } else {
                evenOrOdd = 'odd';
            }
            console.log(`${numOne} ${operator} ${numTwo} = ${result} - ${evenOrOdd}`);
            break;
        case '-':
            result = numOne - numTwo;
            if(result % 2 == 0) {
                evenOrOdd = 'even';
            } else {
                evenOrOdd = 'odd';
            }
            console.log(`${numOne} ${operator} ${numTwo} = ${result} - ${evenOrOdd}`);
            break;
        case '*':
            result = numOne * numTwo;
            if(result % 2 == 0) {
                evenOrOdd = 'even';
            } else {
                evenOrOdd = 'odd';
            }
            console.log(`${numOne} ${operator} ${numTwo} = ${result} - ${evenOrOdd}`);
            break;
        case '/':
            if(numTwo > 0) {
                result = numOne / numTwo;
                console.log(`${numOne} ${operator} ${numTwo} = ${result.toFixed(2)}`);
            } else {
                console.log(`Cannot divide ${numOne} by zero`);
            }
            break;
        case '%':
            if(numTwo > 0) {
                result = numOne % numTwo;
                console.log(`${numOne} ${operator} ${numTwo} = ${result}`);
            } else {
                console.log(`Cannot divide ${numOne} by zero`);
            }
            break;
    }
}

operationsBetweenNums([10, 12, '+']);
operationsBetweenNums([123, 12, '/']);
operationsBetweenNums([112, 0, '/']);
operationsBetweenNums([10, 1, '-']);
operationsBetweenNums([10, 3, '%']);
operationsBetweenNums([10, 0, '%']);
operationsBetweenNums([7, 3, '*']);