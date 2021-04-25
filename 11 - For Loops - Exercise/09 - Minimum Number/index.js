function minimumNumber(arr) {
    const countOfNumbers = Number(arr[0]);
    arr.shift();

    let sortedArray = arr.sort((a, b) => {
        return a - b;
    });
    let minimumNum = sortedArray[0];
    console.log(minimumNum);
}

minimumNumber([2, 100, 99]);
minimumNumber([3, -10, 20, -30]);
minimumNumber([4, 45, -20, 7, 99]);
minimumNumber([1, 999]);
minimumNumber([2, -1, -2]);