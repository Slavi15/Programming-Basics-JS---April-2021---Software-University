function minNumber(input) {
    let arr = [];
    let i = 0;

    while(input[i] !== 'Stop') {
        arr.push(input[i]);
        ++i;
    }

    arr.sort((a, b) => {
        return a - b;
    });
    let minNumber = arr.shift();
    console.log(minNumber);
}

minNumber([100, 99, 80, 70, 'Stop']);
minNumber([-10, 20, -30, 'Stop']);
minNumber([45, -20, 7, 99, 'Stop']);
minNumber([999, 'Stop']);
minNumber([-1, -2, 'Stop']);