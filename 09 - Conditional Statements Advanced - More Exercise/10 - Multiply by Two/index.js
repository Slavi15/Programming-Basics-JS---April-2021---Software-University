function multiplyByTwo(input) {
    const arr = input;
    for(let i = 0; i < arr.length; i++) {
        let result = arr[i] * 2;
        if(result >= 0) {
            console.log(`Result: ${result.toFixed(2)}`);
        } else {
            console.log('Negative number!');
        }
    }
}

multiplyByTwo([12, 43.2144, 12.3, 543.23, -20]);
multiplyByTwo([23.43, 12.3245, 0, 65.23432, 23, 65, -12]);
multiplyByTwo([-123]);