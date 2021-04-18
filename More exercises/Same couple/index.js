function sameCouples(input) {
    const arr = input;
    let pairs = []
    for(let i = 1; i < arr.length; i += 2) {    
        pairs.push(arr[i] + arr[i + 1]);
    }

    if(pairs.every(num => num == pairs[0])) {
        console.log(`Yes, value=${pairs[0]}`)
    } else {
        let sortedArray = pairs.sort((a, b) => {
            return a - b;
        });
        let maxValue = sortedArray.length;
        let minValue = sortedArray[0];
        let difference = Math.abs(maxValue - minValue);
        console.log(`No, maxdiff=${difference}`);
    }
}

sameCouples([3, 1, 2, 0, 3, 4, -1]);
sameCouples([2, 1, 2, 2, 2]);
sameCouples([4, 1, 1, 3, 1, 2, 2, 0, 0]);
sameCouples([1, 5, 5]);
sameCouples([2, -1, 0, 0, -1]);
sameCouples([2, -1, 2, 0, -1]);