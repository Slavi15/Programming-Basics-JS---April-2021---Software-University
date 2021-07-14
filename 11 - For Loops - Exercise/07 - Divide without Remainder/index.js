function divideWithoutRemainder(arr) {
    const countOfNumbers = Number(arr[0]);
    arr.shift();

    let isDivisibleByTwo = 0;
    let isDivisibleByThree = 0;
    let isDivisibleByFour = 0;
    
    for(let i = 0; i < arr.length; i++) {
        arr[i] % 2 == 0 ? isDivisibleByTwo += 1 : '';
        arr[i] % 3 == 0 ? isDivisibleByThree += 1 : '';
        arr[i] % 4 == 0 ? isDivisibleByFour += 1 : '';
    }

    let p1 = isDivisibleByTwo / countOfNumbers * 100;
    let p2 = isDivisibleByThree / countOfNumbers * 100;
    let p3 = isDivisibleByFour / countOfNumbers * 100;

    console.log(`${p1.toFixed(2)}%\n${p2.toFixed(2)}%\n${p3.toFixed(2)}%`)
}

divideWithoutRemainder([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65]);
divideWithoutRemainder([3, 3, 6, 9]);