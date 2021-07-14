function equalPairs(input) {
    let arr = input;
    arr.shift();

    let pairs = [];
    for(let i = 0; i < arr.length; i += 2) {    
        pairs.push(Number(arr[i]) + Number(arr[i + 1]));
    }

    if(pairs.every(num => num == pairs[0])) {
        console.log(`Yes, value=${pairs[0]}`);
    } else {
        let sortedArray = pairs.sort((a, b) => {
            return a - b;
        });
        let maxValue = sortedArray[sortedArray.length - 1];
        let minValue = sortedArray[0];
        let difference = Math.abs(maxValue - minValue);
        console.log(`No, maxdiff=${difference}`);
    }
}

equalPairs([3, 1, 2, 0, 3, 4, -1]);
equalPairs([2, 1, 2, 2, 2]);
equalPairs([4, 1, 1, 3, 1, 2, 2, 0, 0]);
equalPairs([1, 5, 5]);
equalPairs([2, -1, 0, 0, -1]);
equalPairs([2, -1, 2, 0, -1]);
equalPairs([7, 34, -33, 52, 12, -32, 32, 23, 41, 7, 25, 34, 23, 124, 21]);