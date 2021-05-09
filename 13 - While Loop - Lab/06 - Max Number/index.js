function maxNumber(input) {
    let arr = [];
    let i = 0;

    while(input[i] !== 'Stop') {
        arr.push(input[i]);
        ++i;
    }

    arr.sort((a, b) => {
        return a - b;
    });
    let maxNumber = arr.pop();
    console.log(maxNumber);
}

maxNumber([100, 99, 80, 70, 'Stop']);
maxNumber([-10, 20, -30, 'Stop']);
maxNumber([45, -20, 7, 99, 'Stop']);
maxNumber([999, 'Stop']);
maxNumber([-1, -2, 'Stop']);